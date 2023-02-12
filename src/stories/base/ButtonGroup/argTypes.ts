import { baseColors, baseVariants } from "../../constants"

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
        options: ["small", "medium", "large"],
        control: { type: "radio" },
    },
    orientation: {
        options: ["horizontal", "vertical"],
        control: { type: "radio" },
    },
    disabled: {
        control: { type: "boolean" },
    },
}