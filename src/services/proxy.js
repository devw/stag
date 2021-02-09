const {
    PROXY_PATH,
    STORAGE_METAFIELD,
    ENDPOINT,
    CONFIG_FNAME,
} = require("../config");
const SHOP = globalThis?.Shopify?.shop;

exports.getCustomerStatus = async (email) => {
    const endpoint = SHOP
        ? `${location.origin}/${PROXY_PATH}/customer-status/${email}?`
        : `http://localhost:3003/dev/customer-status/${email}?shop=popup-login.myshopify.com&`;
    const promise = await fetch(`${endpoint}t=${Date.now()}`).catch((err) => {
        throw `error getCustomerStatus: , ${err}`;
    });
    return await promise.json();
};

exports.getConfiguration = async () => {
    //TODO implements memoization
    const endpoint = SHOP
        ? `${ENDPOINT}/${SHOP}/${CONFIG_FNAME}`
        : `data/${CONFIG_FNAME}`;
    const promise = await globalThis.fetch(endpoint);
    return promise;
};

exports.storeMetafieldIntoShopify = async () => {
    const cid = globalThis?.__st?.cid;
    const metafieldStorage = localStorage.getItem(STORAGE_METAFIELD);
    const areThereMetafields = metafieldStorage && cid;

    if (!areThereMetafields) return null;

    const endpoint = `${location.origin}/${PROXY_PATH}/metafield`;
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
