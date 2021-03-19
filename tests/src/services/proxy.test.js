const {
    getConfiguration,
    getCustomerStatus,
} = require("../../../src/services/proxy");
const { ENDPOINT, PROXY_PATH } = require("../config");

require("jest-fetch-mock").enableMocks();
//jest.mock("../../../src/services/proxy", () => require("./__mocks__/"));

describe("Proxy Test", () => {
    global.window = Object.create(window);
    const origin = "https://test.shopify.com";
    const shop = "test.shopify.com";
    Object.defineProperty(window, "location", { value: { origin } });
    Object.defineProperty(window, "Shopify", { value: { shop } });
    beforeEach(() => {
        fetch.resetMocks();
    });

    it("calls S3 and returns data to me", async () => {
        const data = { style: {}, text: {} };
        fetch.mockResponseOnce(JSON.stringify(data));
        const res = await getConfiguration();
        const endpoint = `${ENDPOINT}/${window.Shopify.shop}/configuration.json`;
        expect(await res.json()).toEqual(data);
        console.log("fetch.mock.calls:   ", fetch.mock.calls[0][0]);
        expect(fetch.mock.calls.length).toEqual(1);
        expect(fetch.mock.calls[0][0].replace(/\?\w=\d{1,}$/, "")).toEqual(
            endpoint
        );
        expect(true).toBe(true);
    });

    it("gets the customer status", async () => {
        const email = "anto@gmail.com";
        const data = { state: "enabled", properties: {} };
        fetch.mockResponseOnce(JSON.stringify(data));
        const customer = await getCustomerStatus(email);
        const endpoint = `https://${Shopify.shop}/${PROXY_PATH}/customer-status/${email}`;
        expect(customer).toEqual(data);
        expect(fetch.mock.calls.length).toEqual(1);
        expect(fetch.mock.calls[0][0].replace(/\?\w=\d{1,}$/, "")).toEqual(
            endpoint
        );
    });
});
