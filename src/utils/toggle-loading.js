const { APP_ID, CONTAINER_ID } = require("../templates/");

const $ = document.querySelector.bind(document);

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
