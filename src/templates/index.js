const container = require("./container.html");
const landing = require("./landing.html");
const register = require("./register.html");
const signin = require("./sign-in.html");
const activate = require("./activate.html");
const recovery = require("./recovery.html");
const { IDs } = require("../config");

module.exports = {
    container,
    pages: {
        [IDs.LANDING_ID]: landing,
        [IDs.REGISTER_ID]: register,
        [IDs.SIGNIN_ID]: signin,
        [IDs.ACTIVATE_ID]: activate,
        [IDs.RECOVERY_ID]: recovery,
    },
};
