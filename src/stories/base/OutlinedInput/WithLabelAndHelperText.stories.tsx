import * as React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { OutlinedInputProps } from "@mui/material"
import { MuiFormControl, MuiFormHelperText, MuiInputLabel, MuiOutlinedInput } from "../../../mui"
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
    const [val, setValue] = React.useState("")

    return <MuiFormControl
        variant="outlined"
        sx={{ width: "100px" }}
    >
        <MuiInputLabel htmlFor="outlined-input">{label}</MuiInputLabel>
        <MuiOutlinedInput
            {...{ color, size, label, fullWidth, multiline, required, error, disabled }}
            id="outlined-input"
            inputProps={{ "aria-label": `${label}` }}
            onChange={(newValue) => setValue(newValue.target.value)}
            value={val}
        />
        <MuiFormHelperText
            sx={{
                fontSize: "10px",
            }}
        >{helperText}</MuiFormHelperText>
    </MuiFormControl>
}

export const WithLabelAndHelperText = Template.bind({})
WithLabelAndHelperText.args = {
    color: "primary", // defaults to primary when not set
    size: "small",
    label: "Имейл",
    placeholder: "Въведете текст",
    fullWidth: true,
    multiline: false,
    required: false,
    error: false,
    disabled: false,
    helperText: "Helper text",
}