/* istanbul ignore file */

import { baseColors } from "../constants"

export const argTypes = {
    color: {
        options: [...baseColors, "default"],
        control: { type: "select" },
    },
    size: {
        options: ["small", "medium"],
        control: { type: "radio" },
    },
    label: {
        control: { type: "text" },
        description: "label attribute",
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
    hiddenLabel: {
        control: { type: "boolean" },
    },
    disableUnderline: {
        control: { type: "boolean" },
    },
    disabled: {
        control: { type: "boolean" },
    },
}