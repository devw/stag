const rootTmpl = require("./root.template.html");
const containerTmpl = require("./container.template.html");
const landingTmpl = require("./landing.template.html");
const registerTmpl = require("./register.template.html");
const {
    ROOT_ID,
    LANDING_ID,
    REGISTER_ID,
    CONTAINER_ID,
} = require("../configs/pages-id.yml");

const getTemplate = ({ id, html }) => {
    return `<script id="${id}" type="text/x-dot-template">${html}</script>`;
};

const templates = [];

templates.push(getTemplate({ id: ROOT_ID, html: rootTmpl }));
templates.push(getTemplate({ id: CONTAINER_ID, html: containerTmpl }));
templates.push(getTemplate({ id: LANDING_ID, html: landingTmpl }));
templates.push(getTemplate({ id: REGISTER_ID, html: registerTmpl }));

module.exports = { templates };
