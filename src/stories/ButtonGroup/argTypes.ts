import { baseColors } from "../constants"

export const argTypes = {
    variant: {
        options: ["contained", "outlined", "text"],
        control: { type: "radio" },
    },
    color: {
        options: [...baseColors, "inherit"],
        control: { type: "select" },
    },
    size: {
        options: ["xs", "small", "medium", "large"],
        control: { type: "radio" },
    },
    orientation: {
        options: ["horizontal", "vertical"],
        control: { type: "radio" },
    },
    disabled: {
        control: { type: "boolean" },
    },
}