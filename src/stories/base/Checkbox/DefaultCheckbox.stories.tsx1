import { CheckboxProps } from "@mui/material"
import type { Meta, StoryFn } from "@storybook/react"
import { MuiCheckbox } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Collection/Checkbox",
    component: MuiCheckbox,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
        // Additional props: 
        label: {
            control: { type: "text" },
            table: { disable: true },
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
    <MuiCheckbox
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
    label: "Имейл",
}