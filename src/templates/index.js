const containerTmpl = require("./container.html");
const landingTmpl = require("./landing.html");
const registerTmpl = require("./register.html");
const signInTmpl = require("./sign-in.html");
const activateTmpl = require("./activate.html");
const Mustache = require("mustache");

const rendereTemplate = (node, { text }) => {
    node.innerHTML = Mustache.render(containerTmpl, text, {
        landing: landingTmpl,
        register: registerTmpl,
        activate: activateTmpl,
        signin: signInTmpl,
    });
};

module.exports = {
    rendereTemplate,
};
