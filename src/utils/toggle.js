const { IDs } = require("../config");
const getRootNode = () => document.querySelector(`#${IDs.APP_ID}`);

exports.getRootNode = getRootNode;

const $q = (leaf) => getRootNode().querySelector(leaf);
const $qq = (leaf) => getRootNode().querySelectorAll(leaf);

exports.togglePage = (id) => {
    //TODO refactor because it is error prone!
    const ids = Object.values(IDs).slice(2);
    ids.forEach((e) => $q(`#${e}`).style.setProperty("display", "none"));
    $q(`#${id}`).style.setProperty("display", "block");
};

exports.toggleSecret = ({ target }) => {
    const secret = target.nextElementSibling;
    secret.type = secret.type === "password" ? "text" : "password";
};

exports.toggleLoading = (BTN) => {
    const loading = BTN.querySelector(".fa");
    if (loading.classList.contains("off")) {
        loading.classList.remove("off");
        BTN.setAttribute("disabled", "true");
    } else {
        loading.classList.add("off");
        BTN.removeAttribute("disabled");
    }
};

exports.$q = $q;
exports.$qq = $qq;
