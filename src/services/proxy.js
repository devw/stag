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

exports.getTheme = async () => {
    const shopName = globalThis.Shopify?.shop;
    // TODO fix it
    // const endpoint = shopName
    //     ? `https://${shopName}/apps/dev/s3/${shopName}`
    //     : "data/config.json";
    const endpoint = "https://devw.github.io//stag/data/config.json";
    const result = await globalThis.fetch(endpoint);
    return await result.json();
};
