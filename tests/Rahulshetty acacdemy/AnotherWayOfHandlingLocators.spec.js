const { test, expect } = require('@playwright/test');



test('@Webst Client App login', async ({ page }) => {

  const email = "sanju@contact.com";
  const productName = "ZARA COAT 3";

  await page.goto("https://rahulshettyacademy.com/client");

  await page.getByPlaceholder("email@example.com").fill(email);
  await page.getByPlaceholder("enter your passsword").fill("Glassdoor@2025");
  await page.getByRole('button', { name: "Login" }).click();

await page.waitForLoadState('networkidle');
  await page.locator(".card-body b").first().waitFor();

  await page.locator(".card-body")
    .filter({ hasText: productName })
    .getByRole("button", { name: "Add to Cart" })
    .click();

  await page.getByRole("listitem")
    .getByRole("button", { name: "Cart" })
    .click();

  await page.locator("div li").first().waitFor();
  await expect(page.getByText("ZARA COAT 3")).toBeVisible();

  await page.getByRole("button", { name: "Checkout" }).click();

  await page.getByPlaceholder("Select Country").pressSequentially("ind");
  await page.getByRole("button", {name: "India" }).nth(1).click();

  await page.getByText("PLACE ORDER").click();
  await expect(page.getByText("Thankyou for the order.")).toBeVisible();
})
