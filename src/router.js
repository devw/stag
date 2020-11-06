const doT = require("./doT");
const data = require("./configs/text.yml");
const { ROOT_ID, CONTAINER_ID } = require("./configs/pages-id.yml");
const { templates } = require("./templates");

const getTemplate = (template_id) => {
    templates.forEach(appendTemplate);
    return doT.template({
        tmpl: document.getElementById(ROOT_ID).text,
        def: getDef(template_id),
    })(data);
};

const getDef = (template_id) => ({
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
