require('./styles/animations.scss');
require('./styles/date.scss');
require('./styles/form.scss');
require('./styles/main.scss');
require('./styles/popup.scss');
require('./styles/register.scss');
require('./styles/reset.scss');
const { loadTheme } = require('./actions');
const { IDs } = require('./config');
const { getConfiguration } = require('./services');
const { parseConfiguration } = require('./utils');

setTimeout(async () => {
    const node = document.createElement('div');
    node.setAttribute('id', IDs.APP_ID);
    document.body.prepend(node);
    const promise = await getConfiguration();
    const config = parseConfiguration(await promise.json());
    loadTheme(config);
}, 0);
