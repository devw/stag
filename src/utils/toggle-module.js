const { IDs } = require("../config");
const { LANDING_ID, REGISTER_ID, SIGNIN_ID, ACTIVATE_ID } = IDs;
const { $q } = require("./q-selector");

exports.toggleModules = (id) => {
    $q(`.${LANDING_ID}`).style.setProperty("display", "none");
    $q(`.${REGISTER_ID}`).style.setProperty("display", "none");
    $q(`.${SIGNIN_ID}`).style.setProperty("display", "none");
    $q(`.${ACTIVATE_ID}`).style.setProperty("display", "none");
    $q(`.${id}`).style.setProperty("display", "block");
};
