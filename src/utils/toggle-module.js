const { APP_ID, LANDING_ID, REGISTER_ID, SIGNIN_ID } = require("../templates/");
// TODO fix $
const $ = document.querySelector.bind(document);

exports.toggleModules = (id) => {
    $(`#${APP_ID} .${LANDING_ID}`).style.setProperty("display", "none");
    $(`#${APP_ID} .${REGISTER_ID}`).style.setProperty("display", "none");
    $(`#${APP_ID} .${SIGNIN_ID}`).style.setProperty("display", "none");
    $(`#${APP_ID} .${id}`).style.setProperty("display", "block");
};
