const { loadTheme } = require('./actions');
const { IDs } = require('./config');
const { getConfiguration } = require('./services');
const { parseConfiguration } = require('./utils');

setTimeout(async () => {
    const shadowRoot = document.body.attachShadow({ mode: 'open' });
    const node = document.createElement('login-popup');
    const promise = await getConfiguration();
    const config = parseConfiguration(await promise.json());

    shadowRoot.prepend(node);
    node.innerHTML = getHtmlString();
    loadTheme(config);
}, 0);

const getEndPoint = () =>
    globalThis?.Shopify
        ? 'https://login-popup-dev-configs.s3.amazonaws.com/public'
        : './';

const getHtmlString = () => `
        <link rel='stylesheet' href = '${getEndPoint()}./main.css';>
        <div id=${IDs.APP_ID}></div>
    `;
