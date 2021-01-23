const { IDs } = require("../config");

const root = () => document.querySelector(`#${IDs.APP_ID}`);

exports.$q = (leaf) => root().querySelector(leaf);

exports.$qq = (parent, leaf) =>
    root().querySelector(parent).querySelector(leaf);
