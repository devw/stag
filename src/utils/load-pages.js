const { IDs } = require("../config");
const Mustache = require("mustache");
const { pages, container } = require("../templates");
const { $q } = require("../utils/toggle");
const { cleanChoiceBlock } = require("./cleanConfig");

const HEAD = document.getElementsByTagName("head")[0];

const updateInputFields = () => {
    // you should moce this piece of code in render method otherwise it will be not visible on kastor
    const pswElem = $q("[name='customer[password]']");
    let newNode = document.createElement("i");
    newNode.classList.add("fa", "fa-eye", "js-show-psw");
    pswElem.type = "password";
    pswElem.parentNode.insertBefore(newNode, pswElem);
    const emailElem = $q("[name='customer[email]']");
    emailElem.type = "email";
};

exports.render = (text) => {
    const { getRootNode } = require("../utils");
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
    const { text } = config;
    //TODO this part should be made in kastor
    config.text?.choiceBlocks?.forEach(
        (e) => (e.isTag = e.isTag === "hasTag" ? true : false)
    );
    config.text?.dateBlocks?.forEach(
        (e) => (e.isTag = e.isTag === "hasTag" ? true : false)
    );
    config.text?.inputBlocks?.forEach((e) => {
        if (e.name === "customer[email]") {
            e.placeholder = config.text?.yourEmail;
        }
        if (e.name === "customer[password]") {
            e.placeholder = config.text?.yourPassword;
        }
    });

    config.text = cleanChoiceBlock(text);

    text?.orderedBlock?.forEach((e) => (config.text[e] = true));
    return config;
};

exports.addJS = (url, callback) => {
    const head = document.head;
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;

    script.onreadystatechange = callback;
    script.onload = callback;
    head.appendChild(script);
};

exports.addCSS = (url) => {
    const link = `<link rel="stylesheet" href="${url}" />`;
    HEAD.insertAdjacentHTML("afterbegin", link);
};
