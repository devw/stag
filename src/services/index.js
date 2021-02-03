const {
    getCustomerStatus,
    getConfiguration,
    storeMetafieldIntoShopify,
} = require("./proxy");
const { sendHttpRequest } = require("./shopify");

module.exports = {
    storeMetafieldIntoShopify,
    getCustomerStatus,
    sendHttpRequest,
    getConfiguration,
};
