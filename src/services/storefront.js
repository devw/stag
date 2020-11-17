const { customerCreate, customerTokenCreate } = require("./mutations");
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
    variables: { input: input },
});

const getHeader = async (body) => ({
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": await getStorefrontToken(),
    },
    body: JSON.stringify(body),
});

const postRequest = async (fetchBody) => {
    const header = getHeader(fetchBody);
    globalThis.header = header;
    const response = await fetch(`/api/graphql`, await header);
    return await response.json();
};

exports.registerViaStorefront = async (input) => {
    delete input.confirmPassword;
    const fetchBody = getParams({ query: customerCreate, input: input });
    return await postRequest(fetchBody);
};

exports.signInViaStorefront = async (input) => {
    const fetchBody = getParams({ query: customerTokenCreate, input: input });
    return await postRequest(fetchBody);
};
