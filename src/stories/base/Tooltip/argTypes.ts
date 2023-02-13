export const argTypes = {
    title: {
        control: { type: "text" },
    },
    placement: {
        options: [
            "top",
            "top-start",
            "top-end",
            "bottom",
            "bottom-start",
            "bottom-end",
            "left",
            "left-start",
            "left-end",
            "right",
            "right-start",
            "right-end"
        ],
        control: { type: "select" },
    },
    arrow: {
        control: { type: "boolean" },
    },
}