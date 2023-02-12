import type { Meta, StoryFn } from "@storybook/react"
import { CheckboxProps } from "@mui/material"
import { MuiCheckbox, MuiFormControlLabel } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Checkbox",
    component: MuiCheckbox,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
        // Additional props:
        label: {
            control: { type: "text" },
            defaultValue: "Label",
        }
    },
} as Meta

type Props = CheckboxProps & {
    label: string
}

const Template: StoryFn = ({
    color,
    size,
    defaultChecked,
    indeterminate,
    disableRipple,
    disabled,
    label
}) => (
    <MuiFormControlLabel
        control={
            <MuiCheckbox
                {...{ color, size, defaultChecked, indeterminate, disableRipple, disabled }}
            />}
        label={label}
    />
)

export const WithLabel = Template.bind({})
WithLabel.args = {
    color: "primary",
    size: "medium",
    defaultChecked: true,
    indeterminate: false,
    disableRipple: false,
    disabled: false,
}