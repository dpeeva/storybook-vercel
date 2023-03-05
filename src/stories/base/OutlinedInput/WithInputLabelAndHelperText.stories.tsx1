import * as React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { OutlinedInputProps } from "@mui/material"
import { MuiBox, MuiFormHelperText, MuiInputLabel, MuiOutlinedInput } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Collection/OutlinedInput",
    component: MuiOutlinedInput,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
        // Additional props:
        helperText: {
            control: { type: "text" },
        },
    },
} as Meta

type Props = OutlinedInputProps & {
    helperText: string
}

const Template: StoryFn = ({
    color,
    size,
    label,
    fullWidth,
    multiline,
    required,
    error,
    disabled,
    helperText
}) => {
    const [val, setValue] = React.useState("250")

    return <MuiBox
        sx={{ width: "250px" }}
    >
        <MuiInputLabel htmlFor="outlined-input">{label}</MuiInputLabel>
        <MuiOutlinedInput
            {...{ color, size, fullWidth, multiline, required, error, disabled }}
            id="outlined-input"
            inputProps={{ "aria-label": `${label}` }}
            onChange={(newValue) => setValue(newValue.target.value)}
            value={val}
        />
        <MuiFormHelperText>{helperText}</MuiFormHelperText>
    </MuiBox>
}

export const WithInputLabelAndHelperText = Template.bind({})
WithInputLabelAndHelperText.args = {
    color: "primary", // defaults to primary when not set
    size: "medium",
    label: "Имейл",
    placeholder: "Въведете текст",
    fullWidth: true,
    multiline: false,
    required: false,
    error: false,
    disabled: false,
    helperText: "Помощен текст",
}