const doT = require("../doT");
const id_pages = require("../configs/pages-id.yml");
const { templates } = require("../templates");
const { APP_ID, ROOT_ID, CONTAINER_ID, LANDING_ID, REGISTER_ID } = id_pages;
const cssVars = require("../../public/data/custom.json");
const data = require("../../public/data/text.json");
const $ = document.querySelector.bind(document);
const { init: initDashboard } = require("../actions/dashboard");
const { init: initLanding } = require("../actions/landing");

const loadCssVars = (cssVars) => {
    let currentSelector = document.querySelector(`#${APP_ID}`);
    (function traverse(obj, key) {
        if (obj !== null && typeof obj == "object") {
            Object.entries(obj).forEach(([key, value]) => traverse(value, key));
        } else currentSelector.style.setProperty(key, obj);
    })(cssVars);
};

module.exports = {
    loadCssVars: loadCssVars,
};

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

exports.loadTemplates = (text = data, css = cssVars) => {
    loadCssVars(css);
    $(`#${APP_ID}`).innerHTML = getTemplate(text);
};

exports.loadActions = () => {
    initDashboard();
    initLanding();
    initContainer();
};
