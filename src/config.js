module.exports = {
    PROXY_PATH: "apps/dev",
    STORAGE_KEY: "shopify-loginpopup-metafields",
    STORAGE_CONFIG: "shopify-loginpopup-configuration",
    // TODO get it from the PROXY
    ENDPOINT: "https://login-popup-dev-theme.s3.amazonaws.com",
    CONFIG_FNAME: "configuration.json",
    IDs: {
        APP_ID: "login-popup", // TODO you should not use this in CSS
        CONTAINER_ID: "container",
        LANDING_ID: "landing",
        REGISTER_ID: "register",
        SIGNIN_ID: "signin",
        ACTIVATE_ID: "activate",
        RECOVERY_ID: "recovery",
    },
};
