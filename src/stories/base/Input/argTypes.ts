import { baseColors } from "../../constants"

export const argTypes = {
    color: {
        options: baseColors,
        control: { type: "select" },
    },
    size: {
        options: ["small", "medium"],
        control: { type: "radio" },
    },
    placeholder: {
        control: { type: "text" },
    },
    fullWidth: {
        control: { type: "boolean" },
    },
    multiline: {
        control: { type: "boolean" },
    },
    required: {
        control: { type: "boolean" },
    },
    error: {
        control: { type: "boolean" },
    },
    disableUnderline: {
        control: { type: "boolean" },
    },
    disabled: {
        control: { type: "boolean" },
    },
}