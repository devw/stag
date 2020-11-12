const rootTmpl = require("./root.html");
const containerTmpl = require("./container.html");
const landingTmpl = require("./landing.html");
const registerTmpl = require("./register.html");
const signInTmpl = require("./sign-in.html");
const registerNoSlidesTmpl = require("./register-no-slides.html");
const registerWithSlidesTmpl = require("./register-with-slides.html");
const {
    ROOT_ID,
    LANDING_ID,
    REGISTER_ID,
    SIGNIN_ID,
    CONTAINER_ID,
} = require("../configs/pages-id.yml");

const getTemplate = ({ id, html }) =>
    `<script id="${id}" type="text/x-dot-template">${html}</script>`;

const getPartialTemplate = ({ id, html }) => {
    html = `<div class="${id}" style="display: none">${html}</div>`;
    return `<script id="${id}" type="text/x-dot-template">${html}</script>`;
};
const templates = [];

templates.push(getTemplate({ id: ROOT_ID, html: rootTmpl }));
templates.push(getTemplate({ id: CONTAINER_ID, html: containerTmpl }));
templates.push(getPartialTemplate({ id: "carousel", html: signInTmpl }));
templates.push(getPartialTemplate({ id: LANDING_ID, html: landingTmpl }));
templates.push(getPartialTemplate({ id: REGISTER_ID, html: registerTmpl }));
templates.push(
    getTemplate({ id: "registerNoSlides", html: registerNoSlidesTmpl })
);
templates.push(
    getTemplate({ id: "registerWithSlides", html: registerWithSlidesTmpl })
);
templates.push(getPartialTemplate({ id: SIGNIN_ID, html: signInTmpl }));

module.exports = { templates };
