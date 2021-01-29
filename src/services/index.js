const {
    getCustomerStatus,
    getConfiguration,
    storeMetafieldIntoShopify,
} = require("./proxy");
const { sendHttpRequest } = require("./shopify");
const { kastorHandler } = require("./kastor-handler");

module.exports = {
    storeMetafieldIntoShopify,
    getCustomerStatus,
    sendHttpRequest,
    getConfiguration,
    kastorHandler,
};
