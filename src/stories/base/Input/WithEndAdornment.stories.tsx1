import type { Meta, StoryFn } from "@storybook/react"
import { CalendarTodayOutlined } from "@mui/icons-material"
import { InputProps } from "@mui/material"
import { MuiInput, MuiInputAdornment } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Collection/Input",
    component: MuiInput,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
    },
} as Meta

type Props = InputProps & {
}

const Template: StoryFn = (args: Props) => (
    <MuiInput
        {...args}
        inputProps={{ "aria-label": "Имейл" }}
        endAdornment={
            <MuiInputAdornment position={"end"}>
                <CalendarTodayOutlined fontSize="inherit" />
            </MuiInputAdornment>
        }
    />
)

export const WithEndAdornment = Template.bind({})
WithEndAdornment.args = {
    color: "primary", // defaults to primary when not set
    size: "medium",
    placeholder: "Въведете текст",
    fullWidth: false,
    multiline: false,
    required: false,
    error: false,
    disableUnderline: false,
    disabled: false,
}