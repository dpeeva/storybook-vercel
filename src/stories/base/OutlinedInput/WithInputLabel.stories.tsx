import * as React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { OutlinedInputProps } from "@mui/material"
import { MuiBox, MuiInputLabel, MuiOutlinedInput } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Collection/OutlinedInput",
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

const Template: StoryFn = (args: Props) => {
    const [val, setValue] = React.useState("250")
    return <MuiBox
        sx={{ width: "100px" }}
    >
        <MuiInputLabel htmlFor="outlined-input">Имейл</MuiInputLabel>
        <MuiOutlinedInput
            {...args}
            id="outlined-input"
            inputProps={{ "aria-label": "Имейл" }}
            onChange={(newValue) => setValue(newValue.target.value)}
            value={val}
        />
    </MuiBox>
}

export const WithInputLabel = Template.bind({})
WithInputLabel.args = {
    color: "primary", // defaults to primary when not set
    size: "small",
    placeholder: "Въведете имейл",
    fullWidth: true,
    multiline: false,
    required: false,
    error: false,
    disabled: false,
}