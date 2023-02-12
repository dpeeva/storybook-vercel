/* istanbul ignore file */

import { baseColors, baseSizes } from "../../constants"

export const argTypes = {
    color: {
        options: [...baseColors, "default"],
        control: { type: "select" },
    },
    size: {
        options: baseSizes,
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