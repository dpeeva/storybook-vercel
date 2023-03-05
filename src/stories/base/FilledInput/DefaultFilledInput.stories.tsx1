import type { Meta, StoryFn } from "@storybook/react"
import { FilledInputProps } from "@mui/material"
import { MuiFilledInput } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Collection/FilledInput",
    component: MuiFilledInput,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
    },
} as Meta

type Props = FilledInputProps & {
}

const Template: StoryFn = (args: Props) => (
    <MuiFilledInput {...args} />
)

export const Default = Template.bind({})
Default.args = {
    color: "primary",
    size: "medium",
    label: "Имейл",
    placeholder: "Въведете текст",
    fullWidth: false,
    multiline: false,
    required: false,
    error: false,
    hiddenLabel: false,
    disableUnderline: false,
    disabled: false,
}