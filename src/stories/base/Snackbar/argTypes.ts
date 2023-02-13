export const argTypes = {
    open: {
        control: { type: "boolean" },
    },
    autoHideDuration: {
        control: {
            type: "number",
            step: 1000,
        },
        table: { disable: true },
    },
    message: {
        control: { type: "text" },
    },
}