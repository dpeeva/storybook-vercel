import { baseColors, baseSizes } from "../../constants"

export const argTypes = {
    variant: {
        options: ["filled", "outlined"],
        control: { type: "radio" },
    },
    color: {
        options: [...baseColors, "default"],
        control: { type: "select" },
    },
    size: {
        options: baseSizes,
        control: { type: "radio" },
    },
    label: {
        control: { type: "text" },
    },
    disabled: {
        control: { type: "boolean" },
    },
}