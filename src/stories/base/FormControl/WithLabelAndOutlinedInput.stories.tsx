import * as React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { CalendarTodayOutlined } from "@mui/icons-material"
import { FormControlProps } from "@mui/material"
import { MuiBox, MuiFormControl, MuiInputAdornment, MuiInputLabel, MuiOutlinedInput } from "../../../mui"
import { argTypes } from "./argTypes"

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
            {...{ variant, size, error, disabled, label }}
            fullWidth
        >
            <MuiInputLabel htmlFor={"input-id"}>{label}</MuiInputLabel>
            <MuiOutlinedInput
                id={"input-id"}
                label={label} // Needed to hold enough background space for Label on top of border
                placeholder={placeholder}
                startAdornment={
                    <MuiInputAdornment position="start">
                        <CalendarTodayOutlined fontSize="inherit" />
                    </MuiInputAdornment>
                }
            />
        </MuiFormControl>
    </MuiBox>
)

export const WithLabelAndOutlinedInput = Template.bind({})
WithLabelAndOutlinedInput.args = {
    variant: "outlined",
    size: "small",
    error: false,
    disabled: false,
    label: "Имейл",
    placeholder: "Въведете текст",
}