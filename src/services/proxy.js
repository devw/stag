const {
    PROXY_PATH,
    STORAGE_METAFIELD,
    STORAGE_CONFIG,
    CONFIG_ENDPOINT,
} = require("../config.js");

exports.getCustomerStatus = async (email) => {
    // return { state: "enabled", properties: {} };
    const shop = globalThis?.Shopify?.shop;

    const endpoint = shop
        ? `https://${shop}/${PROXY_PATH}/get-customer-status/${email}`
        : "https://api.mocki.io/v1/ce5f60e2";

    try {
        const promise = await fetch(endpoint);
        const result = await promise.json();
        return result;
    } catch (err) {
        console.log("error in proxy.js: ", err);
        //TODO what should I do if the proxy does not work?
        return {};
    }
};

exports.getConfiguration = async () => {
    //TODO implements memoization
    const shopName =
        globalThis.Shopify?.shop || "test-login-popup.myshopify.com";
    const endpoint = `${CONFIG_ENDPOINT}/${shopName}/configuration.json`;
    // const endpoint = "data/configuration.json";
    const promise = await globalThis.fetch(endpoint, {
        headers: { pragma: "no-cache" },
    });
    const result = await promise.json();
    localStorage.setItem(STORAGE_CONFIG, JSON.stringify(result));
    return result;
};

exports.storeMetafieldIntoShopify = async () => {
    const cid = globalThis?.__st?.cid;
    const metafieldStorage = localStorage.getItem(STORAGE_METAFIELD);
    const areThereMetafields = metafieldStorage && cid;

    if (!areThereMetafields) return null;

    const shop = globalThis?.Shopify?.shop;
    const endpoint = `https://${shop}/${PROXY_PATH}/set-metafield-in-shopify`;
    const params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            cid: cid + "",
            metafields: JSON.parse(metafieldStorage),
        }),
    };
    const promise = await globalThis.fetch(endpoint, params);
    const result = await promise.json();
    if (result) localStorage.removeItem(STORAGE_METAFIELD);
};
