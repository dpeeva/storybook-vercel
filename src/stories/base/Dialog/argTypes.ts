export const argTypes = {
    open: {
        control: { type: "boolean" },
    },
    disableEscapeKeyDown: {
        control: { type: "boolean" },
    },
    fullScreen: {
        control: { type: "boolean" },
    },
    fullWidth: {
        control: { type: "boolean" },
    },
    maxWidth: {
        options: ["xs", "sm", "md", "lg", "xl"],
        control: { type: "select" },
    },
    scroll: {
        options: ["body", "paper"],
        control: { type: "radio" },
    },
    transitionDuration: {
        control: { type: "number" },
    },
}