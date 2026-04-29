// Creates funnels in PostHog via the Personal API.
//
// Usage:
//   1. Add to .env.local (NOT committed, NOT NEXT_PUBLIC_):
//        POSTHOG_PERSONAL_API_KEY=phx_...
//        POSTHOG_HOST=https://us.posthog.com
//        POSTHOG_PROJECT_ID=399463
//   2. node --env-file=.env.local scripts/setup-posthog-funnels.mjs
//   3. Delete the Personal API key in PostHog → Settings → Personal API keys.

import { readFileSync } from "node:fs";

// Manual fallback if --env-file isn't supported on the user's Node version
function loadDotEnv(path) {
  try {
    const text = readFileSync(path, "utf-8");
    for (const line of text.split("\n")) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
      if (!m) continue;
      let value = m[2].trim();
      if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
      if (!process.env[m[1]]) process.env[m[1]] = value;
    }
  } catch {
    /* file may not exist; rely on already-set env */
  }
}

loadDotEnv(".env.local");

const HOST = (process.env.POSTHOG_HOST || "https://us.posthog.com").replace(/\/$/, "");
const KEY = process.env.POSTHOG_PERSONAL_API_KEY;
const PROJECT_ID = process.env.POSTHOG_PROJECT_ID;

if (!KEY || !PROJECT_ID) {
  console.error("\nMissing env vars. Add to .env.local:");
  console.error("  POSTHOG_PERSONAL_API_KEY=phx_...");
  console.error("  POSTHOG_HOST=https://us.posthog.com");
  console.error("  POSTHOG_PROJECT_ID=399463\n");
  process.exit(1);
}

// ────────────────────────────────────────────────────────────────────────────
// Funnel definitions
// ────────────────────────────────────────────────────────────────────────────

/**
 * Helper to build an event-step in a funnel.
 *   props: array of [key, value, operator?]  (operator defaults to "exact")
 */
function step(eventName, label, props = []) {
  return {
    kind: "EventsNode",
    event: eventName,
    name: label,
    custom_name: label,
    properties: props.map(([key, value, operator = "exact"]) => ({
      key,
      type: "event",
      operator,
      value,
    })),
  };
}

const FUNNELS = [
  {
    name: "Meta Ads — Gulf Conversion",
    description:
      "Of users who land on /offer/gulf, how many submit the lead form? Primary KPI for Gulf ad campaigns.",
    series: [
      step("$pageview", "Landed on /offer/gulf", [["$current_url", "/offer/gulf", "icontains"]]),
      step("lead_form_submitted", "Submitted lead form", [["source", "offer"]]),
    ],
    windowSeconds: 3600, // 1 hour
  },
  {
    name: "Meta Ads — Europe Conversion",
    description:
      "Of users who land on /offer/europe, how many submit the lead form? Primary KPI for Europe ad campaigns.",
    series: [
      step("$pageview", "Landed on /offer/europe", [["$current_url", "/offer/europe", "icontains"]]),
      step("lead_form_submitted", "Submitted lead form", [["source", "offer"]]),
    ],
    windowSeconds: 3600,
  },
  {
    name: "Demands Browse → Apply",
    description:
      "Browse the current demands page, click into a demand, then submit. Organic content funnel.",
    series: [
      step("$pageview", "Browsed /current-demands", [
        ["$current_url", "/current-demands", "icontains"],
      ]),
      step("demand_card_clicked", "Clicked a demand card"),
      step("lead_form_submitted", "Submitted application", [["source", "demand_detail"]]),
    ],
    windowSeconds: 86400, // 1 day
  },
  {
    name: "Direct Demand Apply (share/SEO)",
    description:
      "Users who land directly on a /current-demands/<id> page (from a shared link or organic search) and apply on the spot.",
    series: [
      step("$pageview", "Landed on demand detail", [
        ["$current_url", "/current-demands/d-", "icontains"],
      ]),
      step("lead_form_submitted", "Submitted application", [["source", "demand_detail"]]),
    ],
    windowSeconds: 3600,
  },
  {
    name: "Full Organic Journey",
    description:
      "Homepage → /current-demands → click a demand → apply. The deepest organic conversion path.",
    series: [
      step("$pageview", "Landed on homepage", [["$pathname", "/"]]),
      step("$pageview", "Browsed /current-demands", [
        ["$current_url", "/current-demands", "icontains"],
      ]),
      step("demand_card_clicked", "Clicked a demand"),
      step("lead_form_submitted", "Submitted application"),
    ],
    windowSeconds: 7 * 86400, // 7 days
  },
];

// ────────────────────────────────────────────────────────────────────────────
// Create insights via PostHog API
// ────────────────────────────────────────────────────────────────────────────

async function createFunnel(funnel) {
  const body = {
    name: funnel.name,
    description: funnel.description,
    saved: true,
    favorited: false,
    query: {
      kind: "InsightVizNode",
      source: {
        kind: "FunnelsQuery",
        series: funnel.series,
        funnelsFilter: {
          funnelWindowInterval: funnel.windowSeconds,
          funnelWindowIntervalUnit: "second",
          funnelVizType: "steps",
          funnelOrderType: "ordered",
        },
        dateRange: { date_from: "-30d" },
        interval: "day",
      },
    },
  };

  const res = await fetch(`${HOST}/api/projects/${PROJECT_ID}/insights/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${KEY}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HTTP ${res.status}: ${text}`);
  }

  return res.json();
}

console.log(`\nCreating ${FUNNELS.length} funnels in PostHog project ${PROJECT_ID}...\n`);

let okCount = 0;
let failCount = 0;

for (const funnel of FUNNELS) {
  process.stdout.write(`  • ${funnel.name.padEnd(40)} `);
  try {
    const created = await createFunnel(funnel);
    const url = `${HOST}/project/${PROJECT_ID}/insights/${created.short_id}`;
    console.log(`✓\n      ${url}`);
    okCount++;
  } catch (err) {
    console.log(`✗\n      ${err.message}`);
    failCount++;
  }
}

console.log(`\nDone — ${okCount} created, ${failCount} failed.\n`);
console.log("Reminder: delete the Personal API key in PostHog → Settings → Personal API keys.");
console.log("It's no longer needed.\n");
