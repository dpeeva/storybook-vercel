import { baseColors } from "../../constants"

export const argTypes = {
    variant: {
        options: ["h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit"],
        control: { type: "select" },
    },
    color: {
        options: [...baseColors, "inherit"],
        control: { type: "select" },
    },
    underline: {
        options: ["none", "hover", "always"],
        control: { type: "radio" },
    },
}