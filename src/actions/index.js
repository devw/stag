const { updateCss, updatePages } = require("../utils");
const { loadActions, openAccount } = require("./load");
const { getConfiguration, kastorHandler } = require("../services");

exports.loadTheme = (themeName) => getConfiguration(themeName).then(onGetConf);

exports.showTheme = () => {
    if (globalThis.self !== globalThis.top) openAccount();
    kastorHandler();
};

const onGetConf = (theme) => {
    updatePages(theme.text);
    updateCss(theme.style);
    loadActions();
};
