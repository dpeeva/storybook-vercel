import type { Meta, StoryFn } from "@storybook/react"
import { CalendarTodayOutlined } from "@mui/icons-material"
import { FilledInputProps } from "@mui/material"
import { MuiFilledInput, MuiInputAdornment } from "../../../mui"
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
    <MuiFilledInput
        {...args}
        startAdornment={
            <MuiInputAdornment position="start">
                <CalendarTodayOutlined fontSize="inherit" />
            </MuiInputAdornment>
        }
    />
)

export const WithStartAdornment = Template.bind({})
WithStartAdornment.args = {
    color: "primary",
    size: "small",
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