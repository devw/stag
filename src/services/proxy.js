const { PROXY_PATH, STORAGE_KEY } = require("../config.js");
const { toggleLoading } = require("../utils/toggle-loading");

exports.isRegistered = async (email) => {
    // return { state: "enabled", properties: {} };
    toggleLoading();
    const controller = new AbortController();
    const shop = globalThis?.Shopify?.shop || "test-login-popup.myshopify.com";
    const endpoint = `https://${shop}/${PROXY_PATH}/get-customer-status?email=${email}&shop=${shop}`;
    console.log("isRegistered endpoint:", endpoint);
    setTimeout(() => controller.abort(), 5000);
    try {
        const promise = await fetch(endpoint, {
            signal: controller.signal,
        });
        const result = await promise.json();
        toggleLoading();
        return result;
    } catch (e) {
        toggleLoading();
    }
};

exports.getTheme = async (themeName) => {
    //TODO implements memoization
    const shopName =
        globalThis.Shopify?.shop || "test-login-popup.myshopify.com";
    // const endpoint = `https://login-popup-dev-theme.s3.amazonaws.com/${shopName}/configuration.json`;
    const endpoint = "data/configuration.json";
    console.log(endpoint);
    const result = await globalThis.fetch(endpoint, {
        headers: { pragma: "no-cache" },
    });
    return await result.json();
};

exports.storeMetafieldIntoShopify = async () => {
    const controller = new AbortController();
    const shop = globalThis?.Shopify?.shop || "test-login-popup.myshopify.com";
    const cid = globalThis?.__st?.cid;
    const endpoint = `https://${shop}/${PROXY_PATH}/set-metafield-in-shopify`;

    const params = {
        shop: shop,
        cid: cid,
        metafields: localStorage.getItem(STORAGE_KEY),
    };

    console.log("storeMetafieldIntoShopify endpoint:", endpoint);

    const metafieldStorage = localStorage.getItem(STORAGE_KEY);

    if (metafieldStorage && params.cid) {
        console.log("There is metafieldStorage: ", metafieldStorage);
        const promise = await globalThis.fetch(endpoint, params);
        const result = await promise.json();
        console.log("storeMetafieldIntoShopify result: ", result);
        if (result) localStorage.removeItem(STORAGE_KEY);
    } else {
        console.log("there are not ", STORAGE_KEY);
    }

    return 0;
};
