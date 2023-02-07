/* istanbul ignore file */

import { baseColors } from "../constants"

export const argTypes = {
    color: {
        options: [...baseColors, "default"],
        control: { type: "select" },
    },
    size: {
        options: ["small", "medium", "large"],
        control: { type: "radio" },
    },
    indeterminate: {
        control: { type: "boolean" },
    },
    disableRipple: {
        control: { type: "boolean" },
    },
    disabled: {
        control: { type: "boolean" },
    },
    defaultChecked: {
        control: { type: "boolean" },
    },
}