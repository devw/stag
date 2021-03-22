exports.addJS = (url, callback) => {
    const head = document.head;
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;

    script.onreadystatechange = callback;
    script.onload = callback;
    head.appendChild(script);
};

exports.addCSS = (url) => {
    const HEAD = document.getElementsByTagName("head")[0];
    const link = `<link rel="stylesheet" href="${url}" />`;
    HEAD.insertAdjacentHTML("afterbegin", link);
};
