const { IDs } = require('../config');
const Mustache = require('mustache');
const { pages, container } = require('../templates');
const { $q } = require('../utils/toggle');
const {
    cleanChoiceBlock,
    cleanInputBlocks,
    cleanDateBlocks,
    cleanStyle,
} = require('./clean-config');

const updateInputFields = () => {
    // you should move this piece of code in render method otherwise it will be not visible on customize
    const pswElem = $q("[name='customer[password]']");
    let newNode = document.createElement('i');
    newNode.classList.add('gg-eye', 'js-show-psw');
    pswElem.type = 'password';
    pswElem.parentNode.insertBefore(newNode, pswElem);
    const emailElem = $q("[name='customer[email]']");
    emailElem.type = 'email';
};

exports.render = (text) => {
    const { getRootNode } = require('../utils');
    const partials = Object.keys(pages).map((id) => ({
        id: id,
        html: Mustache.render(pages[id], text),
    }));
    text.partials = partials;
    text.CONTAINER_ID = IDs.CONTAINER_ID;
    getRootNode().innerHTML = Mustache.render(container, text);
    updateInputFields();
};

exports.parseConfiguration = (config) => {
    const { text, style } = config;

    config.text = cleanInputBlocks(text);
    config.text = cleanDateBlocks(text);
    config.text = cleanChoiceBlock(text);
    config.style = cleanStyle(style, text);

    return config;
};
