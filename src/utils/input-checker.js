// exports.isValidPsw = (value) => value.length > 4;
const { $q } = require("./q-selector");
exports.isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

exports.isValidPsw = (str) => {
    $q(".register .js-error").innerText = "";
    $q(".register .js-error").style.setProperty("display", "none");

    const text = require("../../public/data/text.json");
    const psw = text.password;

    const errorMsgs = [];

    globalThis.$q = $q;
    globalThis.psw = psw;

    if (str.length < psw.pswMinLength) errorMsgs.push(psw.pswMinLengthErr);

    if (str.length > psw.pswMaxLength) errorMsgs.push(psw.pswMaxLengthErr);

    if (psw.pswUppercase && !/(?=.*[A-Z])/.test(str))
        errorMsgs.push(psw.pswUppercaseErr);

    if (psw.pswNumber && !/(?=.*\d)/.test(str))
        errorMsgs.push(psw.pswNumberErr);

    if (psw.pswSpecialCharacter && !/(?=.*[\W|_])/.test(str))
        errorMsgs.push(psw.pswSpecialCharacterErr);

    if (errorMsgs.length > 0) {
        let list = document.createElement("ul");
        for (let i = 0; i < errorMsgs.length; i++) {
            let item = document.createElement("li");
            item.appendChild(document.createTextNode(errorMsgs[i]));
            list.appendChild(item);
        }
        $q(".register .js-error").appendChild(list);
        $q(".register .js-error").style.setProperty("display", "block");
    }
};
