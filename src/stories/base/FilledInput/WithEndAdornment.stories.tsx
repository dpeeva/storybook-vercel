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
        endAdornment={
            <MuiInputAdornment position="end">
                <CalendarTodayOutlined fontSize="inherit" />
            </MuiInputAdornment>
        }
    />
)

export const WithEndAdornment = Template.bind({})
WithEndAdornment.args = {
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