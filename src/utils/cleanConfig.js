exports.cleanChoiceBlock = (text) => {
    //TODO this part should be made in kastor
    text?.choiceBlocks?.forEach((e) => {
        e.lineStyle = e.hasMultiLine ? "multi-line" : "";
        e.choiceStyle = e.hasMultiChoice ? "multi-choice" : "single-choice";
    });
    console.log("cleanConfig", text);
    return text;
};
