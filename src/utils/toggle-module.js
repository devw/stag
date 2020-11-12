const { APP_ID } = require("../configs/pages-id.yml");
const $ = document.querySelector.bind(document);

const toggleModule = (id) => {
    const module = $(`#${APP_ID} .${id}`);
    module.style.getPropertyValue("display") == "none"
        ? module.style.setProperty("display", "block")
        : module.style.setProperty("display", "none");
};

exports.toggleModules = (ids) => {
    ids.forEach(toggleModule);
};
