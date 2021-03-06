const { StyleSheet } = require("aphrodite");

const zIndexScratchPad = 1;
const zIndexAboveScratchpad = zIndexScratchPad + 1;
const zIndexInteractiveComponent = zIndexAboveScratchpad + 1;
//const zIndexCurrentlyDragging = zIndexInteractiveComponent + 1;
//const zIndexCalculator = zIndexCurrentlyDragging + 1;

module.exports = StyleSheet.create({
    perseusInteractive: {
        zIndex: zIndexInteractiveComponent,
        position: "relative",
    },

    aboveScratchpad: {
        position: "relative",
        zIndex: zIndexAboveScratchpad,
    },

    blankBackground: {
        // TODO(emily): Use KhanUtil._BACKGROUND?
        backgroundColor: "#FDFDFD",
    },

    perseusSrOnly: {
        border: 0,
        clip: "rect(0,0,0,0)",
        height: 1,
        margin: -1,
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        width: 1,
    },
});
