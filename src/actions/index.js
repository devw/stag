const { updateCss, updatePages } = require("../utils");
const { loadActions, openAccount } = require("./load");
const { getConfiguration, kastorHandler } = require("../services");

exports.loadTheme = async () => {
    const config = await getConfiguration();
    updatePages(config.text);
    updateCss(config.style);
    loadActions();
};

exports.showTheme = () => {
    if (globalThis.self !== globalThis.top) openAccount();
    kastorHandler();
};
