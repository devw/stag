const themeName = process.argv.slice(-1)[0];
const yaml = require("js-yaml");
const fs = require("fs");
const data = fs.readFileSync(`./src/configs/${themeName}-style.yml`, "utf8");
const yamlStyle = yaml.load(data);

//TODO it needs code refactoring
const getJsonVars = (_yamlStyle) => {
    let json = {};
    (function traverse(obj, key) {
        if (obj !== null && typeof obj == "object") {
            Object.entries(obj).forEach(([key, value]) => traverse(value, key));
        } else json[`--${key}`] = obj;
    })(_yamlStyle);
    return json;
};

let jsonVars = {};
(() => {
    const cssSelectors = Reflect.ownKeys(yamlStyle);
    cssSelectors.forEach((scope) => {
        jsonVars[scope] = getJsonVars(yamlStyle[scope]);
    });
})();

fs.writeFile(
    `./public/data/custom.json`,
    JSON.stringify(jsonVars, null, "\t"),
    () => {}
);

const writeJsonText = () => {
    const data = fs.readFileSync(`./src/configs/${themeName}-text.yml`, "utf8");
    fs.writeFile(
        `./public/data/text.json`,
        JSON.stringify(yaml.load(data), null, "\t"),
        () => {}
    );
};

writeJsonText();
