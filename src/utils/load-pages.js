const { IDs } = require("../config");
const Mustache = require("mustache");
const { pages, container } = require("../templates");
let TEXT = {};

const updateText = (text) => {
    const hasManyKeys = Reflect.ownKeys(text).length > 1;
    const firstKey = Reflect.ownKeys(text)[0];
    if (hasManyKeys) TEXT = text;
    else TEXT[firstKey] = text[firstKey];

    return TEXT;
};

const render = (text) => {
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
exports.render = render;

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

//TODO
globalThis.render = render;
