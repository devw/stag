const { updateCss, rendereTemplate } = require("../utils");
const { loadActions } = require("./load");
const { getConfiguration } = require("../services");

exports.loadTheme = async () => {
    const config = await getConfiguration();
    rendereTemplate(config.text);
    updateCss(config.style);
    loadActions();
};
