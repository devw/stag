require("./configs/style.css");
const { popupActions } = require("./actions");
const { router } = require("./router");
const { LANDING_ID } = require("./configs/pages-id.config");

document.getElementsByTagName("body")[0].innerHTML = router.get(LANDING_ID);
popupActions();
