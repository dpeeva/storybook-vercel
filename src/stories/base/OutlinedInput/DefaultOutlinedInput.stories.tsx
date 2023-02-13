import type { Meta, StoryFn } from "@storybook/react"
import { OutlinedInputProps } from "@mui/material"
import { MuiBox, MuiOutlinedInput } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/OutlinedInput",
    component: MuiOutlinedInput,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
    },
} as Meta

type Props = OutlinedInputProps & {
}

const Template: StoryFn = (args: Props) => (
    < MuiBox
        sx={{ width: "100px" }}
    >
        <MuiOutlinedInput
            {...args}
            inputProps={{ "aria-label": "Имейл" }}
            onChange={() => { }}
        />
    </MuiBox >
)

export const Default = Template.bind({})
Default.args = {
    color: "primary", // defaults to primary when not set
    size: "small",
    placeholder: "Въведете имейл",
    fullWidth: true,
    multiline: false,
    required: false,
    error: false,
    disabled: false,
}