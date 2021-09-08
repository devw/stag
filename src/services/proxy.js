const {
    PROXY_PATH,
    STORAGE_METAFIELD,
    ENDPOINT,
    CONFIG_FNAME,
} = require('../config');

const { getUrlParameter } = require('../utils/');
const proxyUrl = `${location.origin}/${PROXY_PATH}`;

exports.getCustomerStatus = async (email) => {
    const SHOP = globalThis?.Shopify?.shop;
    const endpoint = SHOP
        ? `${proxyUrl}/customer/${email}/status`
        : `http://localhost:4000/dev/proxy/customer/${email}/status`;
    const promise = await fetch(`${endpoint}`).catch((err) => {
        throw `error getCustomerStatus: , ${err}`;
    });
    return await promise.json();
};

const getLocalConfig = () => {
    const config = getUrlParameter('config') || CONFIG_FNAME;
    return `data/${config}`;
};

const getRemoteConfig = (shop) => {
    const customConfig = getUrlParameter('config');
    return customConfig
        ? `${ENDPOINT}/templates/${customConfig}`
        : `${ENDPOINT}/${shop}/${CONFIG_FNAME}`;
};

exports.getConfiguration = async () => {
    //TODO implements memoization
    const SHOP = globalThis?.Shopify?.shop;
    const endpoint = SHOP ? getRemoteConfig(SHOP) : getLocalConfig();
    const promise = await globalThis.fetch(endpoint);
    return promise;
};

exports.sendInvite = async (accountId) => {
    console.log('accountId:', accountId);
    const SHOP = globalThis?.Shopify?.shop;
    const endpoint = SHOP
        ? `${proxyUrl}/account/${accountId}/sendInvite`
        : `http://localhost:4000/dev/proxy/account/${accountId}/sendInvite`;

    console.log(endpoint);
    if (!accountId) return null;
    const promise = await globalThis.fetch(endpoint);
    return promise;
};

exports.storeMetafieldIntoShopify = async () => {
    const cid = globalThis?.__st?.cid;
    const metafieldStorage = localStorage.getItem(STORAGE_METAFIELD);
    const areThereMetafields = metafieldStorage && cid;

    if (!areThereMetafields) return null;

    const endpoint = `${proxyUrl}/customer/metafields`;
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            cid: cid + '',
            metafields: JSON.parse(metafieldStorage),
        }),
    };
    const promise = await globalThis.fetch(endpoint, params);
    const result = await promise.json();
    if (result) localStorage.removeItem(STORAGE_METAFIELD);
};
