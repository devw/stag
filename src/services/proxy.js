const {
    PROXY_PATH,
    STORAGE_METAFIELD,
    STORAGE_CONFIG,
    CONFIG,
} = require("../config.js");

const parseConfiguration = (config) => {
    const { text } = config;
    config.text.isChoiceTag = text.isChoiceTag === "hasTag" ? true : false;
    config.text.isBirthTag = text.isBirthTag === "hasTag" ? true : false;
    text.orderedBlock.forEach((e) => (config.text[e] = true));
    return config;
};

exports.getCustomerStatus = async (email) => {
    const endpoint = `https://${Shopify.shop}/${PROXY_PATH}/get-customer-status/${email}`;
    // const endpoint = `http://localhost:3003/dev/get-customer-status/${email}?shop=popup-login.myshopify.com`;
    try {
        const promise = await fetch(endpoint);
        return await promise.json();
    } catch (err) {
        throw ("error in proxy.js: ", err);
    }
};

exports.getConfiguration = async (fName) => {
    //TODO implements memoization
    const endpoint = /localhost/.test(location.href)
        ? `data/${fName}`
        : `${CONFIG}/${Shopify.shop}/${fName}`;
    const promise = await globalThis.fetch(endpoint, {
        headers: { pragma: "no-cache" },
    });
    const result = parseConfiguration(await promise.json());
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
