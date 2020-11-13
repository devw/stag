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

const writeStyle = () => {
    const pretty = JSON.stringify(jsonVars, null, "\t");
    fs.writeFile(`./public/data/style.json`, pretty, () => {});
    fs.writeFile(`./public/data/${themeName}-style.json`, pretty, () => {});
};
const writeText = () => {
    const data = fs.readFileSync(`./src/configs/${themeName}-text.yml`, "utf8");
    const pretty = JSON.stringify(yaml.load(data), null, "\t");
    fs.writeFile(`./public/data/text.json`, pretty, () => {});
    fs.writeFile(`./public/data/${themeName}-text.json`, pretty, () => {});
};

writeStyle();
writeText();
