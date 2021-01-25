const { IDs } = require("../config");
const { RECOVERY_ID, SIGNIN_ID } = IDs;
const { toggleModules, $q } = require("../utils");

exports.init = () => {
    $q(`.${RECOVERY_ID} .js-back`)?.addEventListener("click", () =>
        toggleModules(SIGNIN_ID)
    );
};
