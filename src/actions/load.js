const { init: initDashboard } = require("./dashboard");
const { init: initLanding } = require("./landing");
const { init: initSignIn } = require("./sign-in");
const { init: initRegistration } = require("./registration");
const { APP_ID } = require("../templates/");
const $ = document.querySelector.bind(document);

const closeApp = () => {
    $(`#${APP_ID} .container`).style.setProperty("display", "none");
    $(`#${APP_ID} .js-dashboard`).style.setProperty("display", "none");
};

const dashboard = () => {
    $(`#${APP_ID} .js-dashboard`).style.setProperty("display", "block");
    $(`#${APP_ID} .js-dashboard`).style.setProperty("position", "absolute");
    $(`#${APP_ID} .js-dashboard`).style.setProperty("top", "0px");
    $(`#${APP_ID} .js-dashboard`).style.setProperty("width", "100vw");
};

const initContainer = () => {
    $(`#${APP_ID} .js-close`).addEventListener("click", closeApp);
    $(`#${APP_ID} .js-toggle-dashboard`).addEventListener("click", dashboard);
};

exports.loadActions = () => {
    initDashboard();
    initLanding();
    initContainer();
    initSignIn();
    initRegistration();
};
