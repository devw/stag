exports.sendHttpRequest = (method, e) =>
    new Promise((res, _) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, e.target.action);
        xhr.send(new FormData(e.target));
        xhr.onload = () => res(xhr.responseText);
    });
