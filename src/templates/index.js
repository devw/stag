const rootTmpl = require("./root.html");
const containerTmpl = require("./container.html");
const landingTmpl = require("./landing.html");
const registerTmpl = require("./register.html");
const signInTmpl = require("./sign-in.html");
const activateTmpl = require("./activate.html");
const registerInputsTmpl = require("./register-inputs.html");
const [APP_ID, ROOT_ID, CONTAINER_ID] = ["login-popup", "bbb", "container"];
const [LANDING_ID, REGISTER_ID, SIGNIN_ID] = ["landing", "register", "signin"];
const [ACTIVATE_ID] = ["activate"];

const getTemplate = ({ id, html }) =>
    `<script id="${id}" type="text/x-dot-template">${html}</script>`;

const getPartialTemplate = ({ id, html }) => {
    html = `<div class="${id}" style="display: none">${html}</div>`;
    return `<script id="${id}" type="text/x-dot-template">${html}</script>`;
};
const templates = [];

templates.push(getTemplate({ id: ROOT_ID, html: rootTmpl }));
templates.push(getTemplate({ id: CONTAINER_ID, html: containerTmpl }));
templates.push(getPartialTemplate({ id: LANDING_ID, html: landingTmpl }));
templates.push(getPartialTemplate({ id: REGISTER_ID, html: registerTmpl }));
templates.push(getPartialTemplate({ id: ACTIVATE_ID, html: activateTmpl }));
templates.push(getTemplate({ id: "registerInputs", html: registerInputsTmpl }));

templates.push(getPartialTemplate({ id: SIGNIN_ID, html: signInTmpl }));

module.exports = {
    templates,
    APP_ID,
    ROOT_ID,
    CONTAINER_ID,
    LANDING_ID,
    REGISTER_ID,
    SIGNIN_ID,
    ACTIVATE_ID,
};
