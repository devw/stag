const { getTheme } = require("../../../src/services/proxy");
describe("proxy", () => {
    // Applies only to tests in this describe block
    beforeEach(() => {
        globalThis.Shopify = { shop: "test.shopify.com" };
    });

    test("test 1", () => {
        console.log(globalThis.Shopify.shop);
        expect(true).toBe(true);
    });

    test("test 2", () => {
        expect(true).toBe(true);
    });
});
