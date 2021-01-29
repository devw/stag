const { IDs } = require("../config");
const { RECOVERY_ID, SIGNIN_ID } = IDs;
const { togglePage, $q } = require("../utils");
const { sendHttpRequest } = require("../services");

let FORM;

exports.init = () => {
    FORM = $q(`.${RECOVERY_ID} form`);

    FORM.querySelector(".js-back").addEventListener("click", () =>
        togglePage(SIGNIN_ID)
    );
    FORM.addEventListener("submit", onSubmit);
};

const onSubmit = async (e) => {
    e.preventDefault();
    FORM.action = "/account/recover";
    console.log(FORM);
    const resp = await sendHttpRequest("POST", e);
    console.log("shopify response", resp);
    //TODO should I redirect the user in some page after this action?
};
