import type { Meta, StoryFn } from "@storybook/react"
import { InputProps } from "@mui/material"
import { MuiInput, MuiInputLabel } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Input",
    component: MuiInput,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
        // Additional props:
        label: {
            control: { type: "text" },
        },
    },
} as Meta

type Props = InputProps & {
    label: string
}

const Template: StoryFn = ({
    color,
    size,
    placeholder,
    fullWidth,
    multiline,
    required,
    error,
    disableUnderline,
    disabled,
    label
}) => (
    <>
        <MuiInputLabel htmlFor={"input-id"}>{label}</MuiInputLabel>
        <MuiInput {...{
            color,
            size,
            placeholder,
            fullWidth,
            multiline,
            required,
            error,
            disableUnderline,
            disabled
        }} id={"input-id"} />
    </>

)

export const WithLabel = Template.bind({})
WithLabel.args = {
    color: "primary", // defaults to primary when not set
    size: "small",
    placeholder: "Въведете текст",
    fullWidth: false,
    multiline: false,
    required: false,
    error: false,
    disableUnderline: false,
    disabled: false,
    label: "Имейл",
}