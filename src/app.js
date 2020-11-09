require("./styles/main.scss");
require("./actions");
const { router } = require("./router");
const { APP_ID, LANDING_ID } = require("./configs/pages-id.yml");
const data = require("./styles/text.json");

const node = document.createElement("div");
node.setAttribute("id", APP_ID);
node.innerHTML = router.get(LANDING_ID, data);
document.body.appendChild(node);
