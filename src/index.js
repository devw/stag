const doT = require("./doT");
const { templates } = require("./templates");
const { data } = require("./configs");

const getDef = () => ({
    header: document.getElementById("headertmpl").text,
    // customheader: document.getElementById('customizableheadertmpl').text
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
