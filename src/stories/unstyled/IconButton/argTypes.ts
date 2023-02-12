import { baseColors, baseSizes, baseVariants } from "../../constants"

export const argTypes = {
    variant: {
        options: baseVariants,
        control: { type: "radio" },
    },
    color: {
        options: baseColors,
        control: { type: "select" },
    },
    size: {
        options: baseSizes,
        control: { type: "radio" },
    },
    disabled: {
        control: { type: "boolean" },
    },
    ref: {
        table: { disable: true },
    },
    component: {
        table: { disable: true },
    },
}