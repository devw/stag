const theme = process.argv.slice(-1)[0];
const yaml = require("js-yaml");
const fs = require("fs");
const data = fs.readFileSync(`./src/configs/${theme}-style.yml`, "utf8");
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

const writeJsonConfig = () => {
    const data = fs.readFileSync(`./src/configs/${theme}-text.yml`, "utf8");
    const json = { style: jsonVars, text: yaml.load(data) };
    const mergedJson = JSON.stringify(json, null, "\t");
    fs.writeFile(`./public/data/config.json`, mergedJson, () => {});
    fs.writeFile(`./public/data/${theme}-config.json`, mergedJson, () => {});
};

writeJsonConfig();
