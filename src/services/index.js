const {
    getCustomerStatus,
    getConfiguration,
    storeMetafieldIntoShopify,
    sendInvite,
} = require('./proxy');
const { sendHttpRequest } = require('./shopify');

module.exports = {
    storeMetafieldIntoShopify,
    getCustomerStatus,
    sendHttpRequest,
    getConfiguration,
    sendInvite,
};
