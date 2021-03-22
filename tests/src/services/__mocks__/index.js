const { fetch } = require("./fetch.mock");

exports.init = () => {
    global.window = Object.create(window);
    const origin = "https://test.shopify.com";
    const shop = "test.shopify.com";
    Object.defineProperty(window, "location", { value: { origin } });
    Object.defineProperty(window, "Shopify", { value: { shop } });
    Object.defineProperty(window, "fetch", { value: fetch });
};
