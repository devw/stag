const { IDs } = require("../config");
const getRootNode = () => document.querySelector(`#${IDs.APP_ID}`);
const { APP_ID, CONTAINER_ID } = IDs;

const $ = document.querySelector.bind(document);

exports.getRootNode = getRootNode;

const $q = (leaf) => getRootNode().querySelector(leaf);

exports.togglePage = (id) => {
    //TODO refactor because it is error prone!
    const ids = Object.values(IDs).slice(2);
    ids.forEach((e) => $q(`.${e}`).style.setProperty("display", "none"));
    $q(`.${id}`).style.setProperty("display", "block");
};

exports.toggleLoading = () => {
    const loading = $(`#${APP_ID} .loading`);
    if (loading.style.getPropertyValue("display") == "none") {
        loading.style.setProperty("display", "block");
        $(`.${CONTAINER_ID}`).style.setProperty("opacity", 0.2);
    } else {
        loading.style.setProperty("display", "none");
        $(`.${CONTAINER_ID}`).style.setProperty("opacity", 1);
    }
};
exports.$q = $q;
