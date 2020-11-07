require("./styles/main.scss");
require("./styles/custom.scss");
require("./actions");
const { router } = require("./router");
const { APP_ID, LANDING_ID } = require("./configs/pages-id.yml");

const node = document.createElement("div");
node.setAttribute("id", APP_ID);
node.innerHTML = router.get(LANDING_ID);
document.body.appendChild(node);
