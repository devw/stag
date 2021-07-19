const $q = (leaf) => document.querySelector(leaf);

const setReactInputValue = (input, value) => {
    const previousValue = input.value;
    input.value = value;
    const tracker = input._valueTracker;
    if (tracker) tracker.setValue(previousValue);
    // 'change' instead of 'input', see https://github.com/facebook/react/issues/11488#issuecomment-381590324
    input.dispatchEvent(new Event('change', { bubbles: true }));
}

const init = () => {
    const backBtn = $q("._2Ijyv");
    if (backBtn) backBtn.style.display = "none";
}

const _setDirectionValue = (target, value) => {
    const el = target.closest("[kc-panel-setting]").parentElement.nextElementSibling
        .querySelector("input")
    setReactInputValue(el, value);
}

const _onCheckboxClick = (event) => {
    const { target } = event;
    const checkedElems = target.parentElement.querySelectorAll("input");
    const checkedList = Array.from(checkedElems).filter(e => e.checked);
    const values = checkedList.map(e => e.name).join(",");
    _resetRadio(event);
    _setDirectionValue(target, values);
};

const _resetRadio = ({ target }) => {
    const els = target.parentElement.nextElementSibling.querySelectorAll("input");
    els.forEach(e => e.checked = false);
}

const _onRadioClick = (event) => {
    const { target } = event;
    const inputs = target.parentElement.previousElementSibling.querySelectorAll("input");
    inputs.forEach(e => e.checked = target.value === "All");
    _setDirectionValue(target, target.value);
}

const _addEventListiner = (current) => {
    const checkboxes = current.querySelectorAll(".checkboxes input[type='checkbox']");
    const radios = current.querySelectorAll(".checkboxes input[type='radio']");
    checkboxes.forEach(e => e.addEventListener("click", _onCheckboxClick));
    radios.forEach(e => e.addEventListener("click", _onRadioClick));
}



setTimeout(() => {
    init();
}, 0);

({
    $q: (leaf) => document.querySelector(leaf),

    _addJS: (url, callback) => {
        const head = document.head;
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;

        script.onreadystatechange = callback;
        script.onload = callback;
        head.appendChild(script);
    },
    _addCSS: (url) => {
        const head = document.head;
        const link = `<link rel="stylesheet" href="${url}" />`;
        head.insertAdjacentHTML("afterbegin", link);
    },
    _getArr(state, str) {
        const _getValue = (str) => str[0].split('":"')[1].trim(1).slice(0, -1);
        const arr = Array.from(state.matchAll(`${str}\\|":".+?"`), _getValue);
        return arr.filter((e) => e.indexOf(",") < 0);
    },
    _getDuplicateMetafields(state) {
        const ns = this._getArr(JSON.stringify(state), "namespace");
        const ks = this._getArr(JSON.stringify(state), "key");
        const ms = ns.map((e, i) => `namespace:${e}, key:${ks[i]}`);

        return ms.reduce((a, c, i) => (c === ms[i - 1] ? [c, ...a] : a), []);
    },
    _getDuplicateTags(state) {
        const ts = this._getArr(JSON.stringify(state), "tag");
        return ts.reduce(
            (a, c, i) => (c === ts[i - 1] ? [`Tag: ${c}`, ...a] : a),
            []
        );
    },
    _showError(target, message) {
        this._hideError(target);
        const label = document.createElement("label");
        label.innerText = message;
        label.style.background = "#FADBD8";
        label.style.fontWeight = "900";
        label.style.padding = "5px 10px";
        label.style.color = "red";
        target.after(label);
        setTimeout(() => {
            //TODO it is not possible to stop event propation of cleanState. cleanState activate the button after this check!
            this._saveBtn().classList.add("Polaris-Button--disabled");
        }, 500);
    },
    _hideError(target) {
        this._saveBtn().classList.remove("Polaris-Button--disabled");
        target.parentNode.querySelectorAll("label").forEach((e) => e.remove());
    },
    _saveBtn: () => document.querySelector("#saveCustomizeBtn"),
    hideNextElement(isChecked, { current }) {
        const elem = current.parentElement.nextElementSibling;
        elem.style.display = isChecked ? "block" : "none";
    },
    autocorrectPadding(value, { current }) {
        const p = current.parentElement.nextElementSibling.querySelectorAll(
            "input"
        );
        if (value == "label-go-down") {
            p[0].value = 6;
            p[3].value = 12;
        }
        if (value == "label-go-up") {
            p[0].value = 13;
            p[3].value = 7;
        }
    },
    cleanState(state, event) {
        const saveBtn = this._saveBtn();
        if (!saveBtn) return null;
        const { target, params } = event;
        const duplicated = [
            ...this._getDuplicateTags(state),
            ...this._getDuplicateMetafields(state),
        ];
        if (duplicated.length > 0) {
            const msg = `Detected duplicated tagsags and/or metafields: ${duplicated.join(
                ", "
            )}`;
            this._showError(saveBtn, msg);
            return null;
        } else {
            this._hideError(saveBtn);
        }
        if (params) {
            const { block_settings, block_id } = params;
            if (block_settings && target === "block:add") {
                const name = block_settings["register|name|"];
                // TODO refactor
                return {
                    block_id,
                    name,
                };
            }
            return params;
        }
    },
    hide(_, { current }) {
        current.style.display = "none";
    },
    hideNextTwoElements(isChecked, { current }) {
        const firstElem = current.parentElement.nextElementSibling;
        const secondElem = firstElem.nextElementSibling;
        const elems = [firstElem, secondElem];
        elems.forEach((e) => (e.style.display = isChecked ? "block" : "none"));
    },
    toggleTag(value, { current }) {
        // TODO the value is the id ... i cannot set true/false!
        _TEST.target.current.parentElement.nextElementSibling.querySelector("input").value
        const _1st = current.parentElement.nextElementSibling;
        const _2nd = _1st.nextElementSibling;
        const _3rd = _2nd.nextElementSibling;
        const tagElements = [_1st];
        const metafieldsElems = [_2nd, _3rd];
        if (value === "hasMetafield") {
            tagElements.forEach((e) => (e.style.display = "none"));
            metafieldsElems.forEach((e) => (e.style.display = "block"));
        }
        if (value === "hasTag") {
            tagElements.forEach((e) => (e.style.display = "block"));
            metafieldsElems.forEach((e) => (e.style.display = "none"));
        }
    },
    showMessage(value, { current }) {
        // globalThis.value = value;
        // globalThis.current = current;
    },
    _addDragDrop: (current) => {
        console.log(current);
        const node = document.createElement("div");
        node.innerHTML = `<input
            type="file"
            class="filepond"
            name="filepond"
            multiple
            data-max-file-size="3MB"
            data-max-files="3"
        />`;
        current.appendChild(node);
        console.log("##########################", current);
    },
    uploadImage(value, { current }) {
        console.log("---------------------", { value, current })
        globalThis.value = value;
        globalThis.current = current;

        if (!globalThis.FilePond) {
            this._addCSS(
                "https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css"
            );
            this._addCSS("https://unpkg.com/filepond/dist/filepond.min.css");
            this._addJS("https://devw.github.io/cvws/filepond.min.js", () => {
                const e = document.querySelector("input[name='filepond']");
                FilePond.registerPlugin(FilePondPluginImagePreview);
                FilePond.create(e);

                const pond = document.querySelector(".filepond--root");
                const onUpdateImage = () => {
                    setTimeout(() => {
                        const imgData = document
                            .querySelector(".filepond--file canvas")
                            .toDataURL();
                        current.querySelector("input").value = imgData;
                        document
                            .querySelector("iframe")
                            .contentWindow.postMessage(
                                {
                                    data: {
                                        setting_id:
                                            "register|--container-bg-image|",
                                        value: imgData,
                                    },
                                },
                                "*"
                            );
                    }, 1000);
                };
                pond.addEventListener("FilePond:updatefiles", (e) => {
                    console.log("File added", e);
                    window.e = e;
                    onUpdateImage();
                });
            });

            this._addDragDrop(current);
        }
    },

    setDateFormat(value, { current }) {
        current.querySelector("input").type = "date";
    },
    setPaddingLabels(value, { current }) { },

    sanitizeInput(_, { current }) {
        const node = current.querySelector("[type='text']");
        node.setAttribute("maxlength", 20);

        node.addEventListener("keyup", ({ target }) => {
            this._hideError(target);
            var input = target.value;
            input = input.replace(/^\d{1,}|[^A-Za-z0-9_\-#:]/, "");
            target.value = input;
        });
        node.addEventListener("mouseleave", ({ target }) => {
            if (target.value.length < 3) {
                const message =
                    "The length must be at least 3 characters long!";
                this._showError(target, message);
            }
        });
    },
    addInputLineCheckbox: (_, { current }) => {
        window.current = current;
        const htmlObjName = "checkboxes";
        const childName = current.querySelector(`.${htmlObjName}`);
        if (!current || childName) return null;
        const getCheckbox = (name) => `<input type="checkbox" name="${name}" id="">${name} `;
        const getRadio = (name) => `&nbsp;<input type="radio" name="input-line-radio" value="${name}">${name} `;
        const checkboxList = ["Top", "Right", "Left", "Bottom"].map(e => getCheckbox(e));
        const radioList = ["All", "None"].map(e => getRadio(e));
        const htmlObj = document.createElement('div');
        htmlObj.className = htmlObjName;
        htmlObj.innerHTML = `<div>${checkboxList}</div><div style="margin-top: 5px">${radioList}</div>`.replace(/,/g, "");
        current.querySelector("div").insertAdjacentElement("afterend", htmlObj);
        _addEventListiner(current);
    },
});
