const { IDs } = require("../config");
const $ = document.querySelector.bind(document);
const { REGISTER_ID } = IDs;
const { APP_ID } = IDs;
const Mustache = require("mustache");
const { pages } = require("../templates");
let TEXT = {};

const updateText = (text) => {
    const hasManyKeys = Reflect.ownKeys(text).length > 1;
    const firstKey = Reflect.ownKeys(text)[0];
    if (hasManyKeys) TEXT = text;
    else TEXT[firstKey] = text[firstKey];
    return TEXT;
};

const getBlocksAttr = () => {
    const blocks = $(`.${REGISTER_ID} form`).getAttribute("data-blocks");
    return blocks.length > 0 ? blocks.split(",") : [];
};

const filterCss = (data) => {
    // TODO refactoring
    let imgUrl;
    imgUrl = data["--container-bg-image"];
    if (imgUrl) data["--container-bg-image"] = `url(${imgUrl})`;
    imgUrl = data["--form-header-image"];
    if (imgUrl) data["--form-header-image"] = `url(${imgUrl})`;
    return data;
};

exports.getBlocksAttr = getBlocksAttr;

exports.sortBlocks = () => {
    const blocks = getBlocksAttr();
    blocks.forEach((e, i) => $(`.${e}`)?.style?.setProperty("order", i));
};

exports.updateCss = (cssVars) => {
    cssVars = filterCss(cssVars);
    (function traverse(obj, key) {
        if (obj !== null && typeof obj == "object") {
            Object.entries(obj).forEach(([key, value]) => traverse(value, key));
        } else $(`#${APP_ID}`).style.setProperty(key, obj);
    })(cssVars);
};

exports.rendereTemplate = (text) => {
    const { getRootNode } = require("../utils");
    text = updateText(text);
    getRootNode().innerHTML = Mustache.render(pages.container, text, {
        landing: pages.landing,
        register: pages.register,
        activate: pages.activate,
        signin: pages.signIn,
        recovery: pages.recovery,
        registerInputs: pages.registerInputs,
    });
};
