import type { Meta, StoryFn } from "@storybook/react"
import { mui } from "../../mui"
import { muiIcons } from "../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Button",
    component: mui.Button,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
        // Additional props:
        text: {
            control: { type: "text" },
            defaultValue: "Button",
        }
    },
} as Meta

type Props = mui.ButtonProps & {
    text?: string // TODO: check why not mandatory
}

const Template: StoryFn = ({
    variant,
    color,
    size,
    disabled,
    text
}: Props) => (
    <mui.Button
        {...{ variant, color, size, disabled }}
        startIcon={<muiIcons.ArrowBack />}
    >{text}</mui.Button>
)

export const WithStartIcon = Template.bind({})
WithStartIcon.args = {
    variant: "contained",
    color: "primary",
    size: "small",
    disabled: false,
}