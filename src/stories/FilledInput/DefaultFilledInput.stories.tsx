import type { Meta, StoryFn } from "@storybook/react"
import { mui } from "../../mui"
import { FilledInputProps } from "@mui/material"
import { argTypes } from "./argTypes"

export default {
    title: "FilledInput",
    component: mui.FilledInput,
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
    <mui.FilledInput {...args} />
)

export const Default = Template.bind({})
Default.args = {
    color: "primary",
    size: "small",
    label: "Label",
    placeholder: "Placeholder",
    fullWidth: false,
    multiline: false,
    required: false,
    error: false,
    hiddenLabel: false,
    disableUnderline: false,
    disabled: false,
}