const rootTmpl = require("./root.template.html");
const accountTmpl = require("./account.template.html");
const landingTmpl = require("./landing.template.html");

const getTemplate = ({ id, html }) =>
    `<script id="${id}" type="text/x-dot-template">${html}</script>`;

const templates = [];

templates.push(getTemplate({ id: "pagetmpl", html: rootTmpl }));
templates.push(getTemplate({ id: "account", html: accountTmpl }));
templates.push(getTemplate({ id: "landing", html: landingTmpl }));

module.exports = { templates };
