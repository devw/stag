const { customerCreate, customerAccessTokenCreate } = require("./mutations");
const { AWS_ENDPOINT } = require("../config.js");

const getStorefrontToken = async () => {
    const shop = globalThis.Shopify?.shop || "antonio-balzac.myshopify.com"; // for local testing
    const response = await fetch(`${AWS_ENDPOINT}/shops/${shop}`);
    const result = await response.json();
    const { storefrontToken } = result[0]; // TODO change the API to get just one result
    return storefrontToken;
};

const getParams = ({ query, input }) => ({
    query: query,
    variables: {
        input: input,
    },
});

const getHeader = (body) => ({
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Shopify-Storefront-Access-Token": getStorefrontToken(),
    },
    body: JSON.stringify(body),
});

const postRequest = async (fetchBody) => {
    const response = await fetch(`/api/graphql`, getHeader(fetchBody));
    return await response.json();
};

exports.registerViaStorefront = async (formData) => {
    const fetchBody = getParams({ query: customerCreate, input: formData });
    return await postRequest(fetchBody);
};

exports.signInViaStorefront = async (formData) => {
    const fetchBody = getParams({
        query: customerAccessTokenCreate,
        input: formData,
    });
    return await postRequest(fetchBody);
};
