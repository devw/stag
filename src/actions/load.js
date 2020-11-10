const { init: initDashboard } = require("./dashboard");
const { init: initLanding } = require("./landing");
const { init: initSignIn } = require("./sign-in");
const { APP_ID } = require("../configs/pages-id.yml");
const $ = document.querySelector.bind(document);

const initContainer = () => {
    const closeApp = () => ($(`#${APP_ID}`).innerHTML = "");
    $(`#${APP_ID} .js-close`).addEventListener("click", closeApp);
};

exports.loadActions = () => {
    initDashboard();
    initLanding();
    initContainer();
    initSignIn();
};
