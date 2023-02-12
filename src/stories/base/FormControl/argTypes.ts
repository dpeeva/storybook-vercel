export const argTypes = {
    variant: {
        options: ["standard", "outlined", "filled"],
        control: { type: "radio" },
    },
    size: {
        options: ["small", "medium"],
        control: { type: "radio" },
    },
    error: {
        control: { type: "boolean" },
    },
    disabled: {
        control: { type: "boolean" },
    },
}