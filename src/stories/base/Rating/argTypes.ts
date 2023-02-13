import { baseSizes } from "../../constants"

export const argTypes = {
    size: {
        options: baseSizes,
        control: { type: "radio" },
    },
    value: {
        control: { type: "number" },
    },
    precision: {
        control: { type: "number" },
    },
    max: {
        control: { type: "number" },
    },
    highlightSelectedOnly: {
        control: { type: "boolean" },
    },
    readOnly: {
        control: { type: "boolean" },
    },
    disabled: {
        control: { type: "boolean" },
    }
}