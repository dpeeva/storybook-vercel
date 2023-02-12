import { baseColors } from "../../constants"

export const argTypes = {
    variant: {
        options: ["dot", "standard"],
        control: { type: "radio" },
    },
    color: {
        options: [...baseColors, "default"],
        control: { type: "select" },
    },
    badgeContent: {
        control: { type: "text" },
    },
    invisible: {
        control: { type: "boolean" },
    },
    showZero: {
        control: { type: "boolean" },
    },
}