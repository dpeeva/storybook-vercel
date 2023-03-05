import type { Meta, StoryFn } from "@storybook/react"
import { TextFieldProps } from "@mui/material"
import { MuiBox, MuiTextField } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Collection/TextField",
    component: MuiTextField,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
    },
} as Meta

type Props = TextFieldProps & {
}

const Template: StoryFn = (args: Props) => (
    <MuiBox sx={{ width: "250px" }}>
        <MuiTextField {...args} />
    </MuiBox>
)

export const Default = Template.bind({})
Default.args = {
    variant: "outlined", // defaults to outlined when not set
    color: "primary", // defaults to primary when not set
    size: "medium",
    label: "Имейл",
    placeholder: "Въведете текст",
    helperText: "Помощен текст",
    fullWidth: true,
    multiline: false,
    required: false,
    error: false,
    disabled: false,
}