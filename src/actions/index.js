const { updatePages } = require("../utils");
const { updateCss } = require("../utils");
const { loadActions } = require("./load");
const { getTheme, kastor } = require("../services");

const onGetTheme = (theme) => {
    updatePages(theme.text);
    updateCss(theme.style);
    loadActions();
    kastor();
};
exports.loadTheme = (themeName) => getTheme(themeName).then(onGetTheme);
