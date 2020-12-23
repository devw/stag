const { updateCss, updatePages } = require("../utils");
const { loadActions, openAccount } = require("./load");
const { getTheme, kastor } = require("../services");

const onGetTheme = (theme) => {
    updatePages(theme.text);
    updateCss(theme.style);
    loadActions();
    kastor();
};
exports.loadTheme = (themeName) => getTheme(themeName).then(onGetTheme);

exports.showTheme = () => {
    if (globalThis.self !== globalThis.top) openAccount();
};
