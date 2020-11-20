const { APP_ID } = require("../templates");

const root = () => document.querySelector(`#${APP_ID}`);

exports.$q = (leaf) => root().querySelector(leaf);

exports.$qq = (parent, leaf) =>
    root().querySelector(parent).querySelector(leaf);
