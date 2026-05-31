const { test, expect, request } = require('@playwright/test');

const loginPayload = {
  userEmail: "sanju@contact.com",
  userPassword: "Glassdoor@2025"
};

let token;

test.beforeAll(async () => {

  const apiContext = await request.newContext();

  const loginResponse = await apiContext.post(
    "https://rahulshettyacademy.com/api/ecom/auth/login",
    { data: loginPayload }
  );

  expect(loginResponse.ok()).toBeTruthy();

  const loginJson = await loginResponse.json();
  token = loginJson.token;

  await apiContext.dispose();
});

test('Purchase product via API', async ({ page }) => {

  const apiContext = await request.newContext();

  const orderResponse = await apiContext.post(
    "https://rahulshettyacademy.com/api/ecom/order/create-order",
    {
      data: {
        orders: [{
          country: "India",
          productOrderId: "6960eac0c941646b7a8b3e68"
        }]
      },
      headers: {
        'Authorization': token, // Try without Bearer if needed
        'Content-Type': 'application/json'
      }
    }
  );

  console.log("Status:", orderResponse.status());
  console.log(await orderResponse.text()); // 🔥 Important for debugging

  expect(orderResponse.ok()).toBeTruthy();

  await apiContext.dispose();
});