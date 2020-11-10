const { templates } = require("../templates");
const doT = require("../doT");
const {
    APP_ID,
    ROOT_ID,
    CONTAINER_ID,
    LANDING_ID,
    REGISTER_ID,
    SIGNIN_ID,
} = require("../configs/pages-id.yml");
const $ = document.querySelector.bind(document);

const getDef = () => ({
    [CONTAINER_ID]: document.getElementById(CONTAINER_ID).text,
    [LANDING_ID]: document.getElementById(LANDING_ID).text,
    [REGISTER_ID]: document.getElementById(REGISTER_ID).text,
    [SIGNIN_ID]: document.getElementById(SIGNIN_ID).text,
});

const appendTemplate = (e) => {
    const elemDiv = document.createElement("div");
    elemDiv.innerHTML = e.trim();
    document.body.appendChild(elemDiv);
};

const getTemplate = (data) => {
    templates.forEach(appendTemplate);
    return doT.template({
        tmpl: document.getElementById(ROOT_ID).text,
        def: getDef(),
    })(data);
};

exports.updatePages = (text) => {
    $(`#${APP_ID}`).innerHTML = getTemplate(text);
};
