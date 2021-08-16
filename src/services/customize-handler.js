const { $q, $qq, togglePage, sortBlocks } = require("../utils/toggle.js");
const { IDs } = require("../config.js");
const { loadActions } = require("../actions/load.js");
const { loadTheme } = require("../actions");
const { parseConfiguration: parseState } = require("../utils/cutomize.utils");

window.parsedState = null;

const changePage = (page) => {
    togglePage(page);
    sortBlocks();
    $q(`#${IDs.CONTAINER_ID}`).style.setProperty("display", "flex");
    loadActions();
    disableBtns();
};

const disableBtn = (e) => {
    e.style.setProperty("pointer-events", "none");
    e.parentNode.style.setProperty("cursor", "not-allowed");
};

const disableBtns = () => {
    $qq("form button").forEach(disableBtn);
    const closeBtn = $q(".js-close");
    closeBtn.style.setProperty("pointer-events", "none");
};

const loadPage = (event) => {
    const params = event?.params;
    const section = params?.section_type || params?.setting_id || params?.section_type_id;
    const page = section?.split("|")[0];
    if (page && page !== "") { changePage(page); } else {
        changePage("landing");
    }
}

const parseStateAndEvent = ({ state, event }) => {
    const { pages, global_sections } = state;
    if (!pages) return null;
    window.parsedState = parseState({ pages, global_sections });
    window.parsedState.style["--animation"] = "none";
    loadTheme(window.parsedState);
    loadPage(event)
}

const loadAnimation = ({ setting_id, state }) => {
    console.log("loadAnimation: ", setting_id, state.value);
    window.parsedState.style["--animation"] = state.value;
    loadTheme(window.parsedState);
    loadPage({ event: { params: setting_id } })
}

const parseStateProxy = (message) => {
    //TODO use closure to avoid global variable window.parsedState
    console.log("-------message--------\n", message)
    const { state, event, data } = message?.data || message?.detail?.data;

    if (event && state) parseStateAndEvent({ state, event })
    if (/--animation/.test(data?.setting_id)) loadAnimation(data)
}

if (
    /config_id/.test(location.href) ||
    window.location !== window.parent.location
) {
    console.log("------------customize handler-----")
    globalThis.addEventListener("message", parseStateProxy);
}

globalThis.addEventListener("addonMessage", parseStateProxy);

window.parent.postMessage("fetchState", '*');
