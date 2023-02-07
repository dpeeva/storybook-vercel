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
            table: { disable: true },
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
    <mui.Checkbox
        {...{ color, size, defaultChecked, indeterminate, disableRipple, disabled }}
        inputProps={{ "aria-label": label }} // Label is mandatory for all form elements, for accessibiity reasons. When label element is not available, aria-label attribute should be set.
    />
)

export const Default = Template.bind({})
Default.args = {
    color: "primary",
    size: "medium",
    defaultChecked: true,
    indeterminate: false,
    disableRipple: false,
    disabled: false,
}