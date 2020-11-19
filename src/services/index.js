const { registerViaProxy, isRegistered } = require("./proxy");
const { registerViaStorefront, signInViaStorefront } = require("./storefront");
const { toggleLoading } = require("../utils/toggle-loading");

// TODO this should be removed
exports.register = async (inputs) => {
    registerViaStorefront(inputs);
    return registerViaProxy(inputs);
};

exports.isRegistered = isRegistered;

// TODO this should be removed
exports.isLogged = async (inputs) => {
    toggleLoading();
    signInViaStorefront(inputs);
    toggleLoading();
};
