const {
    getConfiguration,
    getCustomerStatus,
} = require("../../../src/services/proxy");
const { init: initMock } = require("./__mocks__/");

describe("Proxy Test", () => {
    initMock();

    it("gets the configuration from S3 bucket", async () => {
        const res = await getConfiguration();
        expect(await res.json()).toEqual({ style: {}, text: {} });
    });

    it("gets the customer status", async () => {
        const customer = await getCustomerStatus("anto@gmail.com");
        expect(customer).toEqual({ state: "enabled", properties: {} });
    });
});
