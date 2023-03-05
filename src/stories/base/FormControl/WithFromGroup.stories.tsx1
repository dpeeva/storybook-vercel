import * as React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { FormControlProps } from "@mui/material"
import { MuiBox, MuiCheckbox, MuiFormControl, MuiFormControlLabel, MuiFormGroup, MuiFormHelperText, MuiFormLabel, } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Collection/FormControl",
    component: MuiFormControl,
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

type Props = FormControlProps & {
    helperText: string
}

const Template: StoryFn = ({
    variant,
    size,
    error,
    disabled,
    helperText
}) => (
    <MuiBox sx={{ width: "250px" }}>
        <MuiFormControl
            {...{ variant, size, error, disabled }}
            fullWidth
        >
            <MuiFormLabel component="legend">Group label</MuiFormLabel>
            <MuiFormGroup>
                <MuiFormControlLabel
                    control={
                        <MuiCheckbox size="small" defaultChecked />
                    }
                    label="Етикет 1"
                />
                <MuiFormControlLabel
                    control={
                        <MuiCheckbox size="small" />
                    }
                    label="Етикет 2"
                />
                <MuiFormControlLabel
                    control={
                        <MuiCheckbox size="small" />
                    }
                    label="Етикет 3"
                />
            </MuiFormGroup>
            <MuiFormHelperText>{helperText}</MuiFormHelperText>
        </MuiFormControl>
    </MuiBox>
)

export const WithFormGroup = Template.bind({})
WithFormGroup.args = {
    variant: "standard",
    size: "medium",
    error: false,
    disabled: false,
    helperText: "Помощен текст",
}