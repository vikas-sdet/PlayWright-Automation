class APiUtils {
    constructor(apiContext, loginPayLoad) {
        this.apiContext = apiContext;
        this.loginPayLoad = loginPayLoad;
    }

    async getToken() {

        const loginResponse = await this.apiContext.post(
            "https://rahulshettyacademy.com/api/ecom/auth/login",
            {
                data: this.loginPayLoad
            }
        );

        // ✅ Validate response
        if (!loginResponse.ok()) {
            throw new Error(`Login Failed: ${await loginResponse.text()}`);
        }

        const loginResponseJson = await loginResponse.json();
        const token = loginResponseJson.token;

        console.log("Token:", token);

        return token;
    }

    async createOrder(orderPayLoad) {

        const response = {};

        response.token = await this.getToken();

        const orderResponse = await this.apiContext.post(
            "https://rahulshettyacademy.com/api/ecom/order/create-order",
            {
                data: orderPayLoad,
                headers: {
                    'Authorization': response.token, // or `Bearer ${response.token}`
                    'Content-Type': 'application/json'
                }
            }
        );

        // ✅ Validate response
        if (!orderResponse.ok()) {
            throw new Error(`Order Failed: ${await orderResponse.text()}`);
        }

        const orderResponseJson = await orderResponse.json();

        console.log("Order Response:", orderResponseJson);

        response.orderId = orderResponseJson.orders[0];

        return response;
    }
}

module.exports = { APiUtils };