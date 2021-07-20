const $q = (leaf) => document.querySelector(leaf);

const setReactInputValue = (input, value) => {
    const previousValue = input.value;
    input.value = value;
    const tracker = input._valueTracker;
    if (tracker) tracker.setValue(previousValue);
    // 'change' instead of 'input', see https://github.com/facebook/react/issues/11488#issuecomment-381590324
    input.dispatchEvent(new Event('change', { bubbles: true }));
}


const _getCheckbox = (name) => `<span>
<label class="Polaris-Choice" for="${name}">
    <span class="Polaris-Choice__Control">
        <span class="Polaris-Checkbox"><input id="${name}" name="${name}" type="checkbox" class="Polaris-Checkbox__Input"
                aria-invalid="false" role="checkbox" aria-checked="false" value="">
            <span class="Polaris-Checkbox__Backdrop"></span>
            <span class="Polaris-Checkbox__Icon"><span class="Polaris-Icon"><svg viewBox="0 0 20 20"
                        class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                        <path
                            d="m8.315 13.859-3.182-3.417a.506.506 0 0 1 0-.684l.643-.683a.437.437 0 0 1 .642 0l2.22 2.393 4.942-5.327a.436.436 0 0 1 .643 0l.643.684a.504.504 0 0 1 0 .683l-5.91 6.35a.437.437 0 0 1-.642 0">
                        </path>
                    </svg></span></span>
        </span>
    </span>
    <span class="Polaris-Choice__Label">${name}</span></label>
</span>`;

const _getRadio = (name) => `<div class="Polaris-Stack__Item">
        <label class="Polaris-Choice" for="${name}"><span class="Polaris-Choice__Control"><span
                    class="Polaris-RadioButton"><input id="${name}" name="accounts" type="radio"
                        class="Polaris-RadioButton__Input" aria-describedby="disabledHelpText" value="${name}"
                        checked=""><span class="Polaris-RadioButton__Backdrop"></span></span></span><span
                class="Polaris-Choice__Label">${name}</span></label>
    </div>`;

const _onCheckboxClick = (event) => {
    const { target } = event;
    window.target = target;
    const checkedElems = target.closest(".checkboxes").querySelectorAll("[type='checkbox']");
    const checkedList = Array.from(checkedElems).filter(e => e.checked);
    const values = checkedList.map(e => e.name).join(",");
    _resetRadio(event);
    _setDirectionValue(target, values);
};

const _onRadioClick = (event) => {
    const { target } = event;
    const inputs = target.closest(".checkboxes").querySelectorAll("[type='checkbox']");
    inputs.forEach(e => e.checked = target.value === "All");
    _setDirectionValue(target, target.value);
}

const _addEventListiner = (current) => {
    const checkboxes = current.querySelectorAll(".checkboxes input[type='checkbox']");
    const radios = current.querySelectorAll(".checkboxes input[type='radio']");
    checkboxes.forEach(e => e.addEventListener("click", _onCheckboxClick));
    radios.forEach(e => e.addEventListener("click", _onRadioClick));
}

const _setDirectionValue = (target, value) => {
    const el = target.closest("[kc-panel-setting]").parentElement.nextElementSibling
        .querySelector("input")
    setReactInputValue(el, value);
}

const _resetRadio = ({ target }) => {
    const els = target.closest(".checkboxes").querySelectorAll("[type='radio']");
    els.forEach(e => e.checked = false);
}

const _updateDirection = (current) => {
    window.current = current;
    const { value } = current.parentElement.nextElementSibling.querySelector("input");
    const checkboxes = current.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach(e => e.checked = new RegExp(e.name, "i").test(value));
    current.closest("[kc-panel-setting]").parentElement.nextElementSibling.style.display = "none";
}

const init = () => {
    const backBtn = $q("._2Ijyv");
    if (backBtn) backBtn.style.display = "none";
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
        const childName = current?.querySelector(`.${htmlObjName}`);
        console.log(current)
        if (!current || childName) return null;
        const checkboxList = ["Top", "Right", "Left", "Bottom"].map(e => _getCheckbox(e));
        const radioList = ["All", "None"].map(e => _getRadio(e));
        // const radioList = _getRadio()
        const htmlObj = document.createElement('div');
        htmlObj.className = htmlObjName;
        htmlObj.innerHTML = `<div>${checkboxList}</div><div class="Polaris-Stack">${radioList}</div>`.replace(/,/g, "");
        current.querySelector("div").insertAdjacentElement("afterend", htmlObj);
        _addEventListiner(current);
        _updateDirection(current);

    }
});
