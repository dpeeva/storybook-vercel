export const argTypes = {
    variant: {
        options: ["menu", "selectedMenu"],
        description: "Use menu to prevent selected items from impacting the initial focus.",
        control: { type: "radio" },
        table: { disable: true },
    },
    open: {
        control: { type: "boolean" },
    },
}