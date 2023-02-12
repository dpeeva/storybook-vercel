import { baseColors, baseSizes, baseVariants } from "../../constants"

export const argTypes = {
    variant: {
        options: baseVariants,
        control: { type: "radio" },
    },
    color: {
        options: [...baseColors, "inherit"],
        control: { type: "select" },
    },
    size: {
        options: baseSizes,
        control: { type: "radio" },
    },
    disabled: {
        control: { type: "boolean" },
    }
}
