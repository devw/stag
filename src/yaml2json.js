const yaml = require("js-yaml");
const fs = require("fs");

const data = fs.readFileSync("./src/configs/style.yml", "utf8");
const json = yaml.load(data);

console.log(json);
