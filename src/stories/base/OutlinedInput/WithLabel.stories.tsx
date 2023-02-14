import * as React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { OutlinedInputProps } from "@mui/material"
import { MuiFormControl, MuiInputLabel, MuiOutlinedInput } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Collection/OutlinedInput",
    component: MuiOutlinedInput,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
        placeholder: {
            table: { disable: true },
        },
    },
} as Meta

type Props = OutlinedInputProps & {
}

const Template: StoryFn = (args) => {
    const [val, setValue] = React.useState("")

    return <MuiFormControl
        variant="outlined"
        sx={{ width: "250px" }}
    >
        <MuiInputLabel htmlFor="outlined-input">{args.label}</MuiInputLabel>
        <MuiOutlinedInput
            {...args}
            id="outlined-input"
            inputProps={{ "aria-label": `${args.label}` }}
            onChange={(newValue) => setValue(newValue.target.value)}
            value={val}
        />
    </MuiFormControl>
}

export const WithLabel = Template.bind({})
WithLabel.args = {
    color: "primary", // defaults to primary when not set
    size: "medium",
    label: "Имейл",
    fullWidth: true,
    multiline: false,
    required: false,
    error: false,
    disabled: false,
}