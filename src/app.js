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
        <link rel='stylesheet' href='${getEndPoint()}/main.css?t=${Math.random()}' />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <div id=${IDs.APP_ID}></div>
        <link href='https://css.gg/close.css' rel='stylesheet'>
        <link href='https://css.gg/arrow-left.css' rel='stylesheet'>
        <link href='https://css.gg/eye.css' rel='stylesheet'>
        <link href='https://css.gg/eye-alt.css' rel='stylesheet'>
    `;
