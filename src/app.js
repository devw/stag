require("./styles/main.scss");
require("./actions");
const { APP_ID } = require("./configs/pages-id.yml");

const node = document.createElement("div");
node.setAttribute("id", APP_ID);
document.body.appendChild(node);
