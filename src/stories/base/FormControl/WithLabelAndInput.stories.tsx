import * as React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { FormControlProps } from "@mui/material"
import { MuiBox, MuiFormControl, MuiInput, MuiInputLabel } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Collection/FormControl",
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
    placeholder
}) => (
    <MuiBox sx={{ width: "200px" }}>
        <MuiFormControl
            {...{ variant, size, error, disabled }}
            fullWidth
        >
            <MuiInputLabel htmlFor={"input-id"}>{label}</MuiInputLabel>
            <MuiInput
                id={"input-id"}
                // Label not available in InputProps, use MuiInputLabel or aria-label
                placeholder={placeholder}
            />
        </MuiFormControl>
    </MuiBox>
)

export const WithLabelAndInput = Template.bind({})
WithLabelAndInput.args = {
    variant: "standard",
    size: "small",
    error: false,
    disabled: false,
    label: "Имейл",
    placeholder: "Въведете текст",
}