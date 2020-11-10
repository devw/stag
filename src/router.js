const doT = require("./doT");
const id_pages = require("./configs/pages-id.yml");
const { templates } = require("./templates");
const { APP_ID, ROOT_ID, CONTAINER_ID, LANDING_ID, REGISTER_ID } = id_pages;
const cssVars = require("../public/data/custom.json");
const data = require("../public/data/text.json");
const { loadCssVars } = require("./utils");
const $ = document.querySelector.bind(document);
const { init: initDashboard } = require("./actions/dashboard");
const { init: initLanding } = require("./actions/landing");

const initContainer = () => {
    const closeApp = () => ($(`#${APP_ID}`).innerHTML = "");
    $(`#${APP_ID} .js-close`).addEventListener("click", closeApp);
};

const getTemplate = (data) => {
    templates.forEach(appendTemplate);
    return doT.template({
        tmpl: document.getElementById(ROOT_ID).text,
        def: getDef(),
    })(data);
};

const getDef = () => ({
    [CONTAINER_ID]: document.getElementById(CONTAINER_ID).text,
    [LANDING_ID]: document.getElementById(LANDING_ID).text,
    [REGISTER_ID]: document.getElementById(REGISTER_ID).text,
});

const appendTemplate = (e) => {
    const elemDiv = document.createElement("div");
    elemDiv.innerHTML = e.trim();
    document.body.appendChild(elemDiv);
};

const loadTemplates = (text = data, css = cssVars) => {
    loadCssVars(css);
    $(`#${APP_ID}`).innerHTML = getTemplate(text);
};

const loadActions = () => {
    initDashboard();
    initLanding();
    initContainer();
};

exports.loadTemplates = loadTemplates;
exports.loadActions = loadActions;
