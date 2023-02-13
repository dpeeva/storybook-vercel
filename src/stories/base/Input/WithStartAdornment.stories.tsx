import type { Meta, StoryFn } from "@storybook/react"
import { CalendarTodayOutlined } from "@mui/icons-material"
import { InputProps } from "@mui/material"
import { MuiInput, MuiInputAdornment } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Input",
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
        startAdornment={
            <MuiInputAdornment position={"start"}>
                <CalendarTodayOutlined fontSize="inherit" />
            </MuiInputAdornment>
        }
    />
)

export const WithStartAdornment = Template.bind({})
WithStartAdornment.args = {
    color: "primary", // defaults to primary when not set
    size: "small",
    placeholder: "Въведете текст",
    fullWidth: false,
    multiline: false,
    required: false,
    error: false,
    disableUnderline: false,
    disabled: false,
}