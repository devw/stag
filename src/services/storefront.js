const { customerCreate, customerAccessTokenCreate } = require("./mutations");

const config = require("../config.js");

const getParams = ({ query, input }) => ({
    query: query,
    variables: {
        input: input,
    },
});

const getHeader = (body) => ({
    method: "post",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Shopify-Storefront-Access-Token": config.STOREFRONT_TOKEN,
    },
    body: JSON.stringify(body),
});

const postRequest = async (fetchBody) => {
    const response = await fetch(
        globalThis.Shopify?.shop,
        getHeader(fetchBody)
    );
    return await response.json();
};

exports.registerViaStorefront = async (formData) => {
    const fetchBody = getParams({ query: customerCreate, input: formData });
    console.log(fetchBody);
    return await postRequest(fetchBody);
};

exports.signInViaStorefront = async (formData) => {
    const fetchBody = getParams({
        query: customerAccessTokenCreate,
        input: formData,
    });
    console.log(fetchBody);
    return await postRequest(fetchBody);
};
