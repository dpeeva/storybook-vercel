import type { Meta, StoryFn } from "@storybook/react"
import { mui } from "../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Checkbox",
    component: mui.Checkbox,
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

type Props = mui.CheckboxProps & {
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
    <mui.FormControlLabel
        control={
            <mui.Checkbox
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