const {
    PROXY_PATH,
    STORAGE_METAFIELD,
    STORAGE_CONFIG,
} = require("../config.js");
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
    const endpoint = `https://login-popup-dev-theme.s3.amazonaws.com/${shopName}/configuration.json`;
    // const endpoint = "data/configuration.json";
    console.log(endpoint);
    const promise = await globalThis.fetch(endpoint, {
        headers: { pragma: "no-cache" },
    });
    const result = await promise.json();
    localStorage.setItem(STORAGE_CONFIG, JSON.stringify(result));
    return result;
};

exports.storeMetafieldIntoShopify = async () => {
    const shop = globalThis?.Shopify?.shop;
    const cid = globalThis?.__st?.cid;
    const endpoint = `https://${shop}/${PROXY_PATH}/set-metafield-in-shopify`;
    const metafieldStorage = localStorage.getItem(STORAGE_METAFIELD);

    if (metafieldStorage && cid) {
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                shop: shop,
                cid: cid + "",
                metafields: JSON.parse(metafieldStorage),
            }),
        };
        console.log("There is metafieldStorage: ", metafieldStorage);
        const promise = await globalThis.fetch(endpoint, params);
        const result = await promise.json();
        console.log("storeMetafieldIntoShopify result: ", result);
        if (result) localStorage.removeItem(STORAGE_METAFIELD);
    } else {
        console.log("there are not ", STORAGE_METAFIELD);
    }

    return 0;
};
