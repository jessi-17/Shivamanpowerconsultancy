/**
 * Markdown → HTML for blog articles.
 *
 * Outputs semantic class names (.article-*) instead of inline styles so all
 * visual treatment lives in `article.css`. Supported syntax:
 *
 *   ## H2 / ### H3
 *   - / 1. lists
 *   > quote
 *   > [!NOTE] / [!TIP] / [!WARNING] / [!INFO]   callout boxes (multi-line)
 *   ---                                          horizontal divider
 *   | a | b |                                    tables (pipe-style)
 *   ![alt](url "caption")                        images, optional caption
 *   **bold**, *italic*, `code`, [text](url)      inline
 *
 * The first paragraph in the output is tagged `article-lede` so it can be
 * styled larger / softer than the rest of the body.
 */

export interface Heading {
  id: string;
  text: string;
  level: 2 | 3;
}

export interface RenderedArticle {
  html: string;
  headings: Heading[];
}

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80);

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

function inline(text: string): string {
  // Inline code first so other replacements don't touch its content.
  text = text.replace(/`([^`]+)`/g, (_m, c) => `<code class="article-code">${escapeHtml(c)}</code>`);
  // Bold ** ** before italic so * inside ** isn't eaten.
  text = text.replace(/\*\*(.+?)\*\*/g, '<strong class="article-strong">$1</strong>');
  text = text.replace(/(^|[^*])\*([^*\n]+?)\*(?!\*)/g, '$1<em>$2</em>');
  text = text.replace(
    /\[([^\]]+)\]\(([^)\s]+)(?:\s+"([^"]+)")?\)/g,
    (_m, label, href, _title) =>
      `<a class="article-link" href="${href}" ${href.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""}>${label}</a>`
  );
  return text;
}

const CALLOUT_LABELS: Record<string, string> = {
  NOTE: "Note",
  TIP: "Tip",
  INFO: "Good to know",
  WARNING: "Heads up",
  IMPORTANT: "Important",
};

export function renderMarkdown(md: string): RenderedArticle {
  const lines = md.replace(/\r\n/g, "\n").trim().split("\n");
  const out: string[] = [];
  const headings: Heading[] = [];

  let i = 0;
  let firstParagraphEmitted = false;

  const isBlank = (s: string) => s.trim() === "";

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Blank line — skip
    if (isBlank(trimmed)) {
      i++;
      continue;
    }

    // Horizontal rule
    if (/^---+$/.test(trimmed)) {
      out.push('<hr class="article-divider" />');
      i++;
      continue;
    }

    // Heading
    if (trimmed.startsWith("### ")) {
      const text = trimmed.slice(4).trim();
      const id = slugify(text);
      headings.push({ id, text, level: 3 });
      out.push(`<h3 id="${id}" class="article-h3">${inline(text)}</h3>`);
      i++;
      continue;
    }
    if (trimmed.startsWith("## ")) {
      const text = trimmed.slice(3).trim();
      const id = slugify(text);
      headings.push({ id, text, level: 2 });
      out.push(`<h2 id="${id}" class="article-h2">${inline(text)}</h2>`);
      i++;
      continue;
    }
    if (trimmed.startsWith("# ")) {
      // # is reserved for the page title — render as h2 to avoid duplicate h1
      const text = trimmed.slice(2).trim();
      const id = slugify(text);
      headings.push({ id, text, level: 2 });
      out.push(`<h2 id="${id}" class="article-h2">${inline(text)}</h2>`);
      i++;
      continue;
    }

    // Callout: > [!TYPE] then continuing > lines
    const calloutMatch = trimmed.match(/^>\s*\[!(NOTE|TIP|INFO|WARNING|IMPORTANT)\]\s*(.*)$/i);
    if (calloutMatch) {
      const type = calloutMatch[1].toUpperCase();
      const body: string[] = [];
      if (calloutMatch[2]) body.push(calloutMatch[2]);
      i++;
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        body.push(lines[i].trim().replace(/^>\s?/, ""));
        i++;
      }
      out.push(
        `<aside class="article-callout article-callout--${type.toLowerCase()}">` +
          `<div class="article-callout__label">${CALLOUT_LABELS[type] || type}</div>` +
          `<div class="article-callout__body">${inline(body.join(" "))}</div>` +
          `</aside>`
      );
      continue;
    }

    // Blockquote (single or multi-line `>` block)
    if (trimmed.startsWith(">")) {
      const body: string[] = [trimmed.replace(/^>\s?/, "")];
      i++;
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        body.push(lines[i].trim().replace(/^>\s?/, ""));
        i++;
      }
      out.push(`<blockquote class="article-quote">${inline(body.join(" "))}</blockquote>`);
      continue;
    }

    // Table
    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith("|") && lines[i].trim().endsWith("|")) {
        const cur = lines[i].trim();
        if (/^\|[\s\-|:]+\|$/.test(cur)) {
          // separator row — skip
          i++;
          continue;
        }
        rows.push(
          cur
            .slice(1, -1)
            .split("|")
            .map((c) => c.trim())
        );
        i++;
      }
      if (rows.length) {
        let tbl = '<div class="article-table-wrap"><table class="article-table">';
        rows.forEach((cells, r) => {
          const tag = r === 0 ? "th" : "td";
          tbl += "<tr>";
          cells.forEach((c) => {
            tbl += `<${tag}>${inline(c)}</${tag}>`;
          });
          tbl += "</tr>";
        });
        tbl += "</table></div>";
        out.push(tbl);
      }
      continue;
    }

    // Standalone image:  ![alt](url "caption")
    const imgMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]+)")?\)$/);
    if (imgMatch) {
      const [, alt, src, caption] = imgMatch;
      out.push(
        `<figure class="article-figure">` +
          `<img src="${src}" alt="${escapeHtml(alt)}" loading="lazy" />` +
          (caption ? `<figcaption>${inline(caption)}</figcaption>` : "") +
          `</figure>`
      );
      i++;
      continue;
    }

    // Unordered list
    if (/^[-*]\s/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*]\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^[-*]\s/, ""));
        i++;
      }
      out.push(
        '<ul class="article-list article-list--bullet">' +
          items.map((it) => `<li>${inline(it)}</li>`).join("") +
          "</ul>"
      );
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s/, ""));
        i++;
      }
      out.push(
        '<ol class="article-list article-list--number">' +
          items.map((it) => `<li>${inline(it)}</li>`).join("") +
          "</ol>"
      );
      continue;
    }

    // Paragraph — collect consecutive non-empty, non-special lines
    const paraLines: string[] = [trimmed];
    i++;
    while (
      i < lines.length &&
      !isBlank(lines[i]) &&
      !/^(##|###|>|---|\||[-*]\s|\d+\.\s|!\[)/.test(lines[i].trim())
    ) {
      paraLines.push(lines[i].trim());
      i++;
    }
    const cls = firstParagraphEmitted ? "article-p" : "article-p article-lede";
    firstParagraphEmitted = true;
    out.push(`<p class="${cls}">${inline(paraLines.join(" "))}</p>`);
  }

  return { html: out.join("\n"), headings };
}
