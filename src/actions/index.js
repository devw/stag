const { updateCss, updatePages } = require("../utils");
const { loadActions, openAccount } = require("./load");
const { getTheme, kastorHandler } = require("../services");

exports.loadTheme = (themeName) => getTheme(themeName).then(onGetTheme);

exports.showTheme = () => {
    if (globalThis.self !== globalThis.top) openAccount();
    kastorHandler();
};

const onGetTheme = (theme) => {
    updatePages(theme.text);
    updateCss(theme.style);
    loadActions();
};
