const { init: initDashboard } = require("./dashboard");
const { init: initLanding } = require("./landing");
const { init: initSignIn } = require("./sign-in");
const { init: initRegistration } = require("./register");
const { $q } = require("../utils/");

//TODO refactoring too code repetition

const closeApp = () => {
    $q(`.container`).style.setProperty("display", "none");
    $q(`.js-dashboard`).style.setProperty("display", "none");
    document.body.classList.remove("remove-scrolling");
};

const dashboard = () =>
    $q(`.js-dashboard`).style.setProperty("display", "block");

const initContainer = () => {
    $q(`.js-close`).addEventListener("click", closeApp);
    // $q(`.js-toggle-dashboard`).addEventListener("click", dashboard);
};

exports.loadActions = (config) => {
    initDashboard(config);
    initLanding();
    initContainer();
    initSignIn();
    initRegistration();
};
