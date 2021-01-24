const { IDs } = require("../config");

const getRootNode = () => document.querySelector(`#${IDs.APP_ID}`);

exports.getRootNode = getRootNode;

exports.$q = (leaf) => getRootNode().querySelector(leaf);

exports.$qq = (parent, leaf) =>
    getRootNode().querySelector(parent).querySelector(leaf);
