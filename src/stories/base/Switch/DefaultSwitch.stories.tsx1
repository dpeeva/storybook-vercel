import type { Meta, StoryFn } from "@storybook/react"
import { SwitchProps } from "@mui/material"
import { MuiSwitch } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Collection/Switch",
    component: MuiSwitch,
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

type Props = SwitchProps & {
    label: string
}

const Template: StoryFn = ({
    color,
    size,
    defaultChecked,
    disabled,
    label
}) => (
    <MuiSwitch
        {...{ color, size, defaultChecked, disabled }}
        inputProps={{ "aria-label": label }} // Label is mandatory for all form elements, for accessibiity reasons. When label element is not available, aria-label attribute should be set.
    />
)

export const Default = Template.bind({})
Default.args = {
    color: "primary", // defaults to primary when not set
    size: "medium",
    defaultChecked: false,
    disabled: false,
    label: "Имейл",
}