import { baseColors } from "../constants"

export const argTypes = {
    variant: {
        options: ["contained", "outlined", "text"],
        control: { type: "radio" },
    },
    color: {
        options: [...baseColors],
        control: { type: "select" },
    },
    size: {
        options: ["small", "medium", "large"],
        control: { type: "radio" },
    },
    disabled: {
        control: { type: "boolean" },
    },
    // Additional props:
    text: {
        control: { type: "text" },
    }
}