/**
 * Content hidden from the public website.
 *
 * Any admin-managed blog post or demand whose text matches one of these
 * patterns is left out of public pages, listings, tickers and the sitemap.
 * It is NOT deleted: it stays in the database and remains visible and
 * editable in the admin panel. Remove a pattern to make that content public
 * again.
 *
 * Only use this from public read paths (readPublicBlogs / readPublicDemands).
 * Never filter inside readBlogs/readDemands: admin saves write the full list
 * back, so filtering there would permanently delete the hidden items.
 */
const HIDDEN_FROM_PUBLIC: RegExp[] = [/guam/i];

export function isHiddenFromPublic(item: unknown): boolean {
  const text = JSON.stringify(item ?? "");
  return HIDDEN_FROM_PUBLIC.some((pattern) => pattern.test(text));
}
