require("./configs/style.css");
const doT = require("./doT");
const { templates } = require("./templates");
const { popupActions } = require("./actions");
const data = require("./configs/text.yml");

const getDef = () => ({
    container: document.getElementById("container").text,
    landing: document.getElementById("landing").text,
    register: document.getElementById("register").text,
});

const appendTemplate = (e) => {
    const elemDiv = document.createElement("div");
    elemDiv.innerHTML = e.trim();
    document.body.appendChild(elemDiv);
};

const getPage = () => {
    templates.forEach(appendTemplate);
    return doT.template({
        tmpl: document.getElementById("pagetmpl").text,
        def: getDef(),
    })(data);
};

document.getElementsByTagName("body")[0].innerHTML = getPage();
popupActions();
