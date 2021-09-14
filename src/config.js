module.exports = {
    PROXY_PATH: 'apps/front',
    STORAGE_METAFIELD: 'login-popup-metafields',
    STORAGE_CONFIG: 'login-popup-config',
    // TODO get it from the PROXY
    ENDPOINT: process.env.S3_CONFIGURATIONS,
    CONFIG_FNAME: `configuration.json?a=${Date.now()}`,
    IDs: {
        APP_ID: 'login-popup', // TODO you should not use this in CSS
        CONTAINER_ID: 'container',
        LANDING_ID: 'landing',
        REGISTER_ID: 'register',
        SIGNIN_ID: 'signin',
        ACTIVATE_ID: 'activate',
        RECOVERY_ID: 'recovery',
        NOTIFICATION: 'notification',
    },
};
