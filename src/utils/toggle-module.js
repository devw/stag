const { APP_ID } = require("../templates/");
const $ = document.querySelector.bind(document);

const toggleModule = (id) => {
    const module = $(`#${APP_ID} .${id}`);
    if (module.style.getPropertyValue("display") == "none") {
        module.style.setProperty("display", "block");
        module.style.setProperty("animation", "fade_in_show 0.5s");
    } else {
        module.style.setProperty("display", "none");
    }
};

exports.toggleModules = (ids) => {
    ids.forEach(toggleModule);
};
