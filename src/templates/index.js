const rootTmpl = require("./root.template.html");
const headerTmpl = require("./header.template.html");

const getTemplate = ({ id, html }) =>
    `<script id="${id}" type="text/x-dot-template">${html}</script>`;

const templates = [];

templates.push(getTemplate({ id: "headertmpl", html: headerTmpl }));
templates.push(getTemplate({ id: "pagetmpl", html: rootTmpl }));

module.exports = { templates };
