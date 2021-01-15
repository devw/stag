const {
    isRegistered,
    getTheme,
    storeMetafieldIntoShopify,
} = require("./proxy");
const { sendHttpRequest } = require("./shopify");
const { kastorHandler } = require("./kastor-handler");

exports.storeMetafieldIntoShopify = storeMetafieldIntoShopify;
exports.isRegistered = isRegistered;
exports.sendHttpRequest = sendHttpRequest;
exports.getTheme = getTheme;
exports.kastorHandler = kastorHandler;
