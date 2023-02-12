export const argTypes = {
    variant: {
        options: ["filled", "outlined", "standard"],
        control: { type: "radio" },
    },
    severity: {
        options: ["error", "success", "warning", "info"],
        control: { type: "radio" },
    },
    elevation: {
        options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        control: { type: "select" },
        table: { disable: true },
    },
}