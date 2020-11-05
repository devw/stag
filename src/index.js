import "./configs/style.css";
const doT = require("./doT");
const { templates } = require("./templates");
const { popupActions } = require("./actions");
const data = require("./configs/text.yml");

// const fs = require("fs");
// const data = fs.readFileSync("./configs/text.yml", "utf8");

console.log(data);

const getDef = () => ({
    account: document.getElementById("account").text,
    landing: document.getElementById("landing").text,
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
