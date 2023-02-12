import { baseColors, baseSizes } from "../../constants"

export const argTypes = {
    color: {
        options: [...baseColors, "disabled", "action"],
        control: { type: "select" },
    },
    fontSize: {
        options: ["inherit", ...baseSizes],
        control: { type: "radio" },
    }
}