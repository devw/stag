const { updateCss, updatePages, toggleModules, $q } = require("../utils");
const { loadActions, openAccount } = require("./load");
const { getTheme, kastor } = require("../services");

const onGetTheme = (theme) => {
    updatePages(theme.text);
    updateCss(theme.style);
    loadActions();
    kastor();
};
exports.loadTheme = (themeName) => getTheme(themeName).then(onGetTheme);

exports.loadPopup = () => {
    const urlParams = new URLSearchParams(globalThis.location.search);
    if (urlParams.get("config_id") === "login-popup") openAccount();
};
