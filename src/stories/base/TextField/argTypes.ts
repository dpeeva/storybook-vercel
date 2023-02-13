import { baseColors } from "../../constants"

export const argTypes = {
    variant: {
        options: ["standard", "outlined", "filled"],
        control: { type: "radio" },
    },
    color: {
        options: baseColors,
        control: { type: "select" },
    },
    size: {
        options: ["xs", "small", "medium"],
        control: { type: "radio" },
    },
    label: {
        control: { type: "text" },
    },
    placeholder: {
        control: { type: "text" },
    },
    helperText: {
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
    disabled: {
        control: { type: "boolean" },
    },
}