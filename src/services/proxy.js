const { AWS_ENDPOINT } = require("../config.js");
const { toggleLoading } = require("../utils/toggle-loading");

// TODO remove AWS_ENDPOINT and use the proxy. See getConfig
exports.registerViaProxy = async (inputs) => {
    const response = await fetch(`${AWS_ENDPOINT}/user/add/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
    });
    return response.json();
};

// TODO remove AWS_ENDPOINT and use the proxy. See getConfig
exports.isRegistered = async (email) => {
    toggleLoading();
    const res = await fetch(`${AWS_ENDPOINT}/user/${email}`);
    const json = await res.json();
    toggleLoading();
    return json.data;
};

exports.getTheme = async (themeName) => {
    const shopName =
        globalThis.Shopify?.shop || "test-login-popup.myshopify.com";
    let endpoint;
    //endpoint = `https://login-popup-dev-theme.s3.amazonaws.com/${shopName}/configuration.json`;
    endpoint = `https://login-popup-dev-theme.s3.amazonaws.com/${shopName}/configuration.json`;
    console.log(endpoint);
    const result = await globalThis.fetch(endpoint, {
        headers: { pragma: "no-cache" },
    });
    return await result.json();
};
