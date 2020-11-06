const rootTmpl = require("./root.template.html");
const containerTmpl = require("./container.template.html");
const landingTmpl = require("./landing.template.html");
const registerTmpl = require("./register.template.html");

const getTemplate = ({ id, html }) =>
    `<script id="${id}" type="text/x-dot-template">${html}</script>`;

const templates = [];

templates.push(getTemplate({ id: "pagetmpl", html: rootTmpl }));
templates.push(getTemplate({ id: "container", html: containerTmpl }));
templates.push(getTemplate({ id: "landing", html: landingTmpl }));
templates.push(getTemplate({ id: "register", html: registerTmpl }));

module.exports = { templates };
