const { updatePages } = require("../utils");
const { updateCss } = require("../utils");
const { loadActions } = require("./load");
const { getTheme } = require("../services");

getTheme().then((theme) => {
    updatePages(theme.text);
    updateCss(theme.style);
    loadActions(theme);
});
