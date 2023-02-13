import * as React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { FormControlProps } from "@mui/material"
import { MuiBox, MuiFilledInput, MuiFormControl, MuiInputAdornment, MuiInputLabel } from "../../../mui"
import { argTypes } from "./argTypes"
import { CalendarTodayOutlined } from "@mui/icons-material"

export default {
    title: "Base/FormControl",
    component: MuiFormControl,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
        variant: {
            table: { disable: true },
        },
        // Additional props:
        label: {
            control: { type: "text" },
        },
        placeholder: {
            control: { type: "text" },
        },
    },
} as Meta

type Props = FormControlProps & {
    label: string
    placeholder: string
}

const Template: StoryFn = ({
    variant,
    size,
    error,
    disabled,
    label,
    placeholder,
}) => (
    <MuiBox sx={{ width: "200px" }}>
        <MuiFormControl
            {...{ variant, size, error, disabled }}
            fullWidth
        >
            <MuiInputLabel htmlFor={"input-id"}>{label}</MuiInputLabel>
            <MuiFilledInput
                id={"input-id"}
                // Label not available in FilledInputProps, use MuiInputLabel or aria-label
                placeholder={placeholder}
                endAdornment={
                    <MuiInputAdornment position="end">
                        <CalendarTodayOutlined fontSize="inherit" />
                    </MuiInputAdornment>
                }
            />
        </MuiFormControl>
    </MuiBox>
)

export const WithLabelAndFilledInput = Template.bind({})
WithLabelAndFilledInput.args = {
    variant: "filled",
    size: "small",
    error: false,
    disabled: false,
    label: "Имейл",
    placeholder: "Въведете текст",
}