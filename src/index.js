const component = () => {
    const element = globalThis.document.createElement("div");
    element.innerHTML = "Hello3";
    return element;
};

document.body.appendChild(component());
