const { registerViaProxy, isRegistered } = require("./proxy");
const { registerViaStorefront, signInViaStorefront } = require("./storefront");
const { toggleLoading } = require("../utils/toggle-loading");
const { sendHttpRequest } = require("./shopify");

exports.isRegistered = isRegistered;
exports.sendHttpRequest = sendHttpRequest;

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
