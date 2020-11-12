const { APP_ID, CONTAINER_ID } = require("../configs/pages-id.yml");
const $ = document.querySelector.bind(document);

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
    //TODO use AWS endpoint
    return new Promise((res, _) => {
        toggleLoading();
        setTimeout(() => {
            // res(/@gm/.test(email));
            res(localStorage.getItem("email") === email);
            localStorage.setItem("email", email);
            toggleLoading();
        }, 500);
    });
};

exports.isLogged = async (email, psw) => {
    //TODO use shop endpoint
    return new Promise((res, _) => {
        toggleLoading();
        setTimeout(() => {
            res(localStorage.getItem("email") === email);
            // res(/@gm/.test(email) && /a/.test(psw));
            toggleLoading();
        }, 500);
    });
};
