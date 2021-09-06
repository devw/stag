require('./styles/index.scss');
const { loadTheme } = require('./actions');
const { IDs, ENDPOINT } = require('./config');
const { getConfiguration } = require('./services');
const { parseConfiguration, getShadowDOM } = require('./utils');

setTimeout(async () => {
    const shadowRoot = getShadowDOM();
    const node = document.createElement('login-popup');
    const promise = await getConfiguration();
    const config = parseConfiguration(await promise.json());

    shadowRoot.prepend(node);
    node.innerHTML = getHtmlString();
    loadTheme(config);
}, 0);

const getEndPoint = () => (globalThis?.Shopify ? `${ENDPOINT}/public` : '.');

const getHtmlString = () => `
        <link rel='stylesheet' href='${getEndPoint()}/main.css'>
        <div id=${IDs.APP_ID}></div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="http://fonts.cdnfonts.com/css/optima-nova-lt-pro" />
        <link rel="stylesheet" href="https://use.typekit.net/flz5qbr.css" />
        <link rel="stylesheet" href="https://unpkg.com/@shopify/polaris@5/dist/styles.css" />
    `;
