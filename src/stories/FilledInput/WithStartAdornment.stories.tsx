import type { Meta, StoryFn } from "@storybook/react"
import { mui, muiIcons } from "../../mui"
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

type Props = mui.FilledInputProps & {
}

const Template: StoryFn = (args: Props) => (
    <mui.FilledInput
        {...args}
        startAdornment={
            <mui.InputAdornment position="start">
                <muiIcons.CalendarTodayOutlined fontSize="inherit" />
            </mui.InputAdornment>
        }
    />
)

export const WithStartAdornment = Template.bind({})
WithStartAdornment.args = {
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