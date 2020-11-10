const doT = require("./doT");
const id_pages = require("./configs/pages-id.yml");
const { templates } = require("./templates");
const { ROOT_ID, CONTAINER_ID, LANDING_ID, REGISTER_ID } = id_pages;

const getTemplate = (data) => {
    templates.forEach(appendTemplate);
    return doT.template({
        tmpl: document.getElementById(ROOT_ID).text,
        def: getDef(),
    })(data);
};

const getDef = () => ({
    [CONTAINER_ID]: document.getElementById(CONTAINER_ID).text,
    [LANDING_ID]: document.getElementById(LANDING_ID).text,
    [REGISTER_ID]: document.getElementById(REGISTER_ID).text,
});

const _getDef = (template_id) => ({
    [CONTAINER_ID]: document.getElementById(CONTAINER_ID).text,
    [template_id]: document.getElementById(template_id).text,
});

const appendTemplate = (e) => {
    const elemDiv = document.createElement("div");
    elemDiv.innerHTML = e.trim();
    document.body.appendChild(elemDiv);
};

module.exports = {
    router: {
        get: getTemplate,
    },
};
