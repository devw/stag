const { IDs } = require("../config");
const { $q } = require("./q-selector");

exports.toggleModules = (id) => {
    //TODO refactor because it is error prone!
    const ids = Object.values(IDs).slice(2);
    ids.forEach((e) => $q(`.${e}`).style.setProperty("display", "none"));
    $q(`.${id}`).style.setProperty("display", "block");
};
