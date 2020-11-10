const rootTmpl = require("./root.html");
const containerTmpl = require("./container.html");
const landingTmpl = require("./landing.html");
const registerTmpl = require("./register.html");
const signInTmpl = require("./sign-in.html");
const {
    ROOT_ID,
    LANDING_ID,
    REGISTER_ID,
    SIGNIN_ID,
    CONTAINER_ID,
} = require("../configs/pages-id.yml");

const getTemplate = ({ id, html }) =>
    `<script id="${id}" type="text/x-dot-template">${html}</script>`;
const templates = [];

templates.push(getTemplate({ id: ROOT_ID, html: rootTmpl }));
templates.push(getTemplate({ id: CONTAINER_ID, html: containerTmpl }));
templates.push(getTemplate({ id: LANDING_ID, html: landingTmpl }));
templates.push(getTemplate({ id: REGISTER_ID, html: registerTmpl }));
templates.push(getTemplate({ id: SIGNIN_ID, html: signInTmpl }));

module.exports = { templates };
