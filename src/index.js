const doT = require("./doT");

const component = () => {
    const element = globalThis.document.createElement("div");
    element.innerHTML = "Hello3";
    console.log(doT);
    return element;
};

document.body.appendChild(component());
