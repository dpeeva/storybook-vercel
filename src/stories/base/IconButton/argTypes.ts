import { baseColors, baseSizes } from "../../constants"

export const argTypes = {
    color: {
        options: [...baseColors, "inherit", "default"],
        control: { type: "select" },
    },
    size: {
        options: baseSizes,
        control: { type: "radio" },
    },
    disabled: {
        control: { type: "boolean" },
    },
}