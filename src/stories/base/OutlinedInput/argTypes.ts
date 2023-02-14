import { baseColors } from "../../constants"

export const argTypes = {
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
    disabled: {
        control: { type: "boolean" },
    },
}