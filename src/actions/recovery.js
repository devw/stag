const { IDs } = require("../config");
const { RECOVERY_ID, SIGNIN_ID } = IDs;
const { togglePage, $q } = require("../utils");

exports.init = () => {
    $q(`.${RECOVERY_ID} .js-back`)?.addEventListener("click", () =>
        togglePage(SIGNIN_ID)
    );
};
