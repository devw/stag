const { APP_ID, CONTAINER_ID } = require("../templates/");
const $ = document.querySelector.bind(document);
const { AWS_ENDPOINT } = require("../config.js");
const { registerViaProxy } = require("./proxy");
const { registerViaStorefront, signInViaStorefront } = require("./storefront");

const toggleLoading = () => {
    const loading = $(`#${APP_ID} .loading`);
    if (loading.style.getPropertyValue("display") == "none") {
        loading.style.setProperty("display", "block");
        $(`.${CONTAINER_ID}`).style.setProperty("opacity", 0.2);
    } else {
        loading.style.setProperty("display", "none");
        $(`.${CONTAINER_ID}`).style.setProperty("opacity", 1);
    }
};

exports.isRegistered = async (email) => {
    toggleLoading();
    const res = await fetch(`${AWS_ENDPOINT}/customers/search/${email}`);
    const json = await res.json();
    toggleLoading();
    return json.data;
};

exports.register = async (inputs) => {
    registerViaStorefront(inputs);
    return registerViaProxy(inputs);
};

exports.isLogged = async (inputs) => {
    return new Promise((res, _) => {
        toggleLoading();
        setTimeout(() => {
            signInViaStorefront(inputs);
            toggleLoading();
        }, 500);
    });
};
