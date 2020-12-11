const { updateCss, updatePages, toggleModules, $q } = require("../utils");
const { loadActions } = require("./load");
const { getTheme, kastor } = require("../services");

const onGetTheme = (theme) => {
    updatePages(theme.text);
    updateCss(theme.style);
    loadActions();
    kastor();
    const json = {
        sectionName: "register-section",
        setting_id: "hasCarousel",
        value: "true",
    };
    globalThis.__sectionSettings = ({ sectionName, setting_id, value }) => {
        if (setting_id) updatePages({ [setting_id]: value });
        const section = sectionName.replace(/-section/, "");
        toggleModules(section);
        $q(".container").style.setProperty("display", "flex");
    };
};
exports.loadTheme = (themeName) => getTheme(themeName).then(onGetTheme);
