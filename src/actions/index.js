const { updateCss, updatePages } = require("../utils");
const { loadActions, openAccount } = require("./load");
const { getConfiguration, kastorHandler } = require("../services");

const { rendereTemplate } = require("../templates");

exports.loadTheme = async (node) => {
    const config = await getConfiguration();
    // updatePages(config.text);
    rendereTemplate(node, config);
    updateCss(config.style);
    loadActions();
};

exports.showTheme = () => {
    if (globalThis.self !== globalThis.top) openAccount();
    kastorHandler();
};
