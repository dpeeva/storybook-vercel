export const argTypes = {
    stickyHeader: {
        control: { type: "boolean" },
    },
    padding: {
        options: ["checkbox", "normal", "none"],
        control: { type: "radio" },
    },
    size: {
        options: ["small", "medium"],
        control: { type: "radio" },
        defaultValue: "small",
    },
}