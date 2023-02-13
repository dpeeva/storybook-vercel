import { baseColors } from "../../constants"

export const argTypes = {
    color: {
        options: [...baseColors, "default"],
        control: { type: "select" },
    },
    size: {
        options: ["small", "medium"],
        control: { type: "radio" },
    },
    defaultChecked: {
        control: { type: "boolean" },
    },
    disabled: {
        control: { type: "boolean" },
    },
}