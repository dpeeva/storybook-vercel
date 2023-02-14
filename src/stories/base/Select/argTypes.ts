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
        options: ["small", "medium"],
        control: { type: "radio" },
    },
    label: {
        control: { type: "text" },
        description: "The label of the input. It is only used for layout. The actual labelling is handled by InputLabel",
    },
    disabled: {
        control: { type: "boolean" },
    },
}