export const argTypes = {
    variant: {
        options: ["fullWidth", "inset", "middle"],
        control: { type: "radio" },
    },
    orientation: {
        options: ["vertical", "horizontal"],
        control: { type: "radio" },
    },
    light: {
        control: { type: "boolean" },
    },
    flexItem: {
        control: { type: "boolean" },
    },
    absolute: {
        control: { type: "boolean" },
    },
    textAlign: {
        options: ["center", "left", "right"],
        control: { type: "radio" },
    },
}