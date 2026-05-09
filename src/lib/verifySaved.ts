/**
 * Re-fetches a value after a save and confirms it landed correctly.
 * Returns true if the live state matches what we just saved, false otherwise.
 *
 * Use after admin save handlers to detect silent destruction in real-time.
 *
 * Example:
 *   await fetch("/api/admin/offer", { method: "PUT", body: JSON.stringify(form) });
 *   const ok = await verifySaved("/api/admin/offer", form, (live) => live.gulf);
 *   setVerified(ok);
 */

export interface VerifyOptions<TLive, TExpected> {
  /** GET endpoint that returns the current live state. */
  url: string;
  /** Expected value we just saved. */
  expected: TExpected;
  /** Pluck the comparable subset out of the live response. */
  selector?: (live: TLive) => unknown;
  /** Compare function. Defaults to JSON-equality on key fields. */
  compare?: (a: unknown, b: TExpected) => boolean;
  /** Slight delay before re-fetching (write propagation). Default 300ms. */
  delayMs?: number;
}

export async function verifySaved<TLive = unknown, TExpected = unknown>(
  opts: VerifyOptions<TLive, TExpected>
): Promise<{ ok: boolean; reason?: string }> {
  const { url, expected, selector, compare, delayMs = 300 } = opts;

  if (delayMs > 0) await new Promise((r) => setTimeout(r, delayMs));

  let live: TLive;
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      return { ok: false, reason: `verify GET HTTP ${res.status}` };
    }
    live = (await res.json()) as TLive;
  } catch (err) {
    return { ok: false, reason: `verify GET failed: ${(err as Error).message}` };
  }

  const actual = selector ? selector(live) : (live as unknown);

  if (compare) {
    return compare(actual, expected)
      ? { ok: true }
      : { ok: false, reason: "live state does not match what was just saved" };
  }

  // Default compare: shallow JSON match on the keys present in `expected`
  if (typeof expected === "object" && expected !== null) {
    const exp = expected as Record<string, unknown>;
    const act = (actual ?? {}) as Record<string, unknown>;
    for (const k of Object.keys(exp)) {
      if (JSON.stringify(act[k]) !== JSON.stringify(exp[k])) {
        return { ok: false, reason: `field "${k}" differs after save` };
      }
    }
    return { ok: true };
  }

  return JSON.stringify(actual) === JSON.stringify(expected)
    ? { ok: true }
    : { ok: false, reason: "value mismatch after save" };
}
