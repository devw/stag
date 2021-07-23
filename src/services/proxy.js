const {
    PROXY_PATH,
    STORAGE_METAFIELD,
    ENDPOINT,
    CONFIG_FNAME,
} = require("../config");

const { getUrlParameter } = require("../utils/");

exports.getCustomerStatus = async (email) => {
    const SHOP = globalThis?.Shopify?.shop;
    const endpoint = SHOP
        ? `${location.origin}/customer/${email}/status`
        : `http://localhost:3003/dev/customer-status/${email}?shop=popup-login.myshopify.com&`;
    const promise = await fetch(`${endpoint}t=${Date.now()}`).catch((err) => {
        throw `error getCustomerStatus: , ${err}`;
    });
    return await promise.json();
};

const getLocalConfig = () => {
    const config = getUrlParameter("config") || CONFIG_FNAME;
    return `data/${config}`;
}

const getRemoteConfig = (shop) => {
    const customConfig = getUrlParameter("config");
    return customConfig ?
        `${ENDPOINT}/templates/${customConfig}`
        : `${ENDPOINT}/${shop}/${CONFIG_FNAME}`;
}

exports.getConfiguration = async () => {
    //TODO implements memoization
    const SHOP = globalThis?.Shopify?.shop || "popup-login.myshopify.com";
    const endpoint = SHOP
        ? getRemoteConfig(SHOP)
        : getLocalConfig();
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
