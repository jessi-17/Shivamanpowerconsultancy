import { test, expect } from "@playwright/test";

test.describe("smoke", () => {
  test("home page renders", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1").first()).toBeVisible();
    // Skip-to-content link is present (accessibility check)
    await expect(page.locator("a.skip-to-content")).toHaveAttribute(
      "href",
      "#main-content"
    );
  });

  test("blog list renders and shows posts", async ({ page }) => {
    await page.goto("/blog");
    await expect(page.locator("h1").first()).toBeVisible();
    // Featured post card is a link to /blog/<slug>
    const firstBlogLink = page.locator('a[href^="/blog/"]').first();
    await expect(firstBlogLink).toBeVisible();
  });

  test("contact form is interactive", async ({ page }) => {
    await page.goto("/contactus");
    await page.fill('input[type="text"]', "Playwright Tester");
    await page.fill('input[type="tel"]', "+910000000000");
    // Don't submit — we don't want to create a real lead. Just confirm interactivity.
    await expect(page.locator('input[type="text"]').first()).toHaveValue(
      "Playwright Tester"
    );
  });
});
