const { $q } = require("./q-selector");
const errorSelector = ".register .js-error";
// const { text } = require("../../public/data/config.json");
// const password = text.password;

const showError = (errorMsgs) => {
    const list = document.createElement("ul");
    errorMsgs.forEach((e) => {
        const item = document.createElement("li");
        item.appendChild(document.createTextNode(e));
        list.appendChild(item);
    });
    $q(errorSelector).appendChild(list);
    $q(errorSelector).style.setProperty("display", "block");
    return false;
};
const resetErrorMsgs = () => {
    $q(errorSelector).innerText = "";
    $q(errorSelector).style.setProperty("display", "none");
};

const getPswConfirmationError = (inputs) => {
    const { password } = JSON.parse($q(`.js-custom-style`).value).text;
    const errorMsgs = [];
    const areDifferent =
        inputs.confirmPassword &&
        inputs.confirmPassword !== inputs["customer[password]"];
    if (areDifferent) errorMsgs.push(password.passwordConfirmationError);
    return errorMsgs;
};

const getPasswordPolicyErrors = (inputs) => {
    const str = inputs["customer[password]"];
    const { password } = JSON.parse($q(`.js-custom-style`).value).text;
    const pswPolicy = password;
    const errorMsgs = [];

    if (str.length < pswPolicy.pswMinLength)
        errorMsgs.push(pswPolicy.pswMinLengthErr);
    if (str.length > pswPolicy.pswMaxLength)
        errorMsgs.push(pswPolicy.pswMaxLengthErr);
    if (pswPolicy.pswUppercase && !/(?=.*[A-Z])/.test(str))
        errorMsgs.push(pswPolicy.pswUppercaseErr);
    if (pswPolicy.pswNumber && !/(?=.*\d)/.test(str))
        errorMsgs.push(pswPolicy.pswNumberErr);
    if (pswPolicy.pswSpecialCharacter && !/(?=.*[\W|_])/.test(str))
        errorMsgs.push(pswPolicy.pswSpecialCharacterErr);

    return errorMsgs;
};

exports.isValidPsw = (inputs) => {
    resetErrorMsgs();
    const pswConfirmationErrs = getPswConfirmationError(inputs);
    const pswPolicyErrs = getPasswordPolicyErrors(inputs);
    const errorMsgs = pswConfirmationErrs.concat(pswPolicyErrs);
    return errorMsgs.length === 0 ? true : showError(errorMsgs) && false;
};

exports.isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
