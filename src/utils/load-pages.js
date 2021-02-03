const { IDs } = require("../config");
const Mustache = require("mustache");
const { pages, container } = require("../templates");
const { $q, getRootNode } = require("./toggle");
let TEXT = {};

const updateText = (text) => {
    const hasManyKeys = Reflect.ownKeys(text).length > 1;
    const firstKey = Reflect.ownKeys(text)[0];
    if (hasManyKeys) TEXT = text;
    else TEXT[firstKey] = text[firstKey];

    return TEXT;
};
// TODO you should move this function elsewhere
const getBlocksAttr = () => {
    const blocks = $q(`#${IDs.REGISTER_ID} form`).getAttribute("data-blocks");
    return blocks.length > 0 ? blocks.split(",") : [];
};

const filterCss = (data) => {
    // TODO you should wrap the value based on the regexp /^http/
    const imgs = ["--container-bg-image", "--header-img"];
    imgs.forEach((e) => {
        if (data[e]) data[e] = `url(${data[e]})`;
    });
    return data;
};

exports.getBlocksAttr = getBlocksAttr;

exports.sortBlocks = () => {
    const blocks = getBlocksAttr();
    blocks.forEach((e, i) => $q(`#${e}`)?.style?.setProperty("order", i));
};

exports.updateCss = (cssVars) => {
    cssVars = filterCss(cssVars);
    (function traverse(obj, key) {
        if (obj !== null && typeof obj == "object") {
            Object.entries(obj).forEach(([key, value]) => traverse(value, key));
        } else getRootNode().style.setProperty(key, obj);
    })(cssVars);
};

exports.render = (text) => {
    const { getRootNode } = require("../utils");
    text = updateText(text);
    const partials = Object.keys(pages).map((id) => ({
        id: id,
        html: Mustache.render(pages[id], text),
    }));
    text.partials = partials;
    text.CONTAINER_ID = IDs.CONTAINER_ID;
    getRootNode().innerHTML = Mustache.render(container, text);
};

exports.parseConfiguration = (config) => {
    const { text } = config;
    // TODO too code repetition
    console.log("parseConfiguration....", config);
    config.text.isChoiceTag = text.isChoiceTag === "hasTag" ? true : false;
    config.text.isBirthTag = text.isBirthTag === "hasTag" ? true : false;
    config.text.isDateTag = text.isDateTag === "hasTag" ? true : false;
    text?.orderedBlock?.forEach((e) => (config.text[e] = true));
    return config;
};
