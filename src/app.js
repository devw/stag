require("./configs/style.css");
const doT = require("./doT");
const { templates } = require("./templates");
const { popupActions } = require("./actions");
const data = require("./configs/text.yml");
const {
    ROOT_ID,
    LANDING_ID,
    REGISTER_ID,
    CONTAINER_ID,
} = require("./configs/pages-id.config");

const getDef = () => ({
    [CONTAINER_ID]: document.getElementById(CONTAINER_ID).text,
    [LANDING_ID]: document.getElementById(LANDING_ID).text,
    [REGISTER_ID]: document.getElementById(REGISTER_ID).text,
});

const appendTemplate = (e) => {
    const elemDiv = document.createElement("div");
    elemDiv.innerHTML = e.trim();
    document.body.appendChild(elemDiv);
};

const getPage = () => {
    templates.forEach(appendTemplate);
    return doT.template({
        tmpl: document.getElementById(ROOT_ID).text,
        def: getDef(),
    })(data);
};

document.getElementsByTagName("body")[0].innerHTML = getPage();
popupActions();
