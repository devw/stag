const { registerViaProxy, isRegistered, getTheme } = require("./proxy");
const { registerViaStorefront, signInViaStorefront } = require("./storefront");
const { toggleLoading } = require("../utils/toggle-loading");
const { sendHttpRequest } = require("./shopify");
const { kastorHandler } = require("./kastor-handler");

exports.isRegistered = isRegistered;
exports.sendHttpRequest = sendHttpRequest;
exports.getTheme = getTheme;
exports.kastorHandler = kastorHandler;

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
