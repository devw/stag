const { getConfiguration } = require("../../../src/services/proxy");
const { CONFIG_ENDPOINT } = require("../config");
require("jest-fetch-mock").enableMocks();

describe("Proxy-test: getting json configuration", () => {
    beforeEach(() => {
        fetch.resetMocks();
        globalThis.Shopify = { shop: "test.shopify.com" };
    });

    it("calls S3 and returns data to me", async () => {
        const res = await getConfiguration();
        const endpoint = `${CONFIG_ENDPOINT}/${globalThis.Shopify.shop}/configuration.json`;

        fetch.mockResponseOnce(JSON.stringify({ data: { style: "" } }));
        expect(res.data).toEqual({ style: "" });
        expect(fetch.mock.calls.length).toEqual(1);
        expect(fetch.mock.calls[0][0]).toEqual(endpoint);
    });
});
