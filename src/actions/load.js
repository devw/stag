const { init: initDashboard } = require("./dashboard");
const { init: initLanding } = require("./landing");
const { init: initSignIn } = require("./sign-in");
const { init: initRegistration } = require("./register");
const { APP_ID } = require("../templates/");
const $ = document.querySelector.bind(document);

//TODO refactoring too code repetition

const closeApp = () => {
    $(`#${APP_ID} .container`).style.setProperty("display", "none");
    $(`#${APP_ID} .js-dashboard`).style.setProperty("display", "none");
    document.body.classList.remove("remove-scrolling");
};

const dashboard = () =>
    $(`#${APP_ID} .js-dashboard`).style.setProperty("display", "block");

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
