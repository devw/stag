const { registerViaProxy, isRegistered, getConfig } = require("./proxy");
const { registerViaStorefront, signInViaStorefront } = require("./storefront");
const { toggleLoading } = require("../utils/toggle-loading");
const { sendHttpRequest } = require("./shopify");

exports.isRegistered = isRegistered;
exports.sendHttpRequest = sendHttpRequest;
exports.getConfig = getConfig;

// TODO this should be removed
exports.register = async (inputs) => {
    registerViaStorefront(inputs);
    return registerViaProxy(inputs);
};
// TODO this should be removed
exports.isLogged = async (inputs) => {
    toggleLoading();
    signInViaStorefront(inputs);
    toggleLoading();
};
