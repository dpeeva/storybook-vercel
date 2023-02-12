import type { Meta, StoryFn } from "@storybook/react"
import { mui } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Button",
    component: mui.Button,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
        // Additional props:
        text: {
            control: { type: "text" },
        }
    }
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
}) => (
    <mui.Button {...{
        variant,
        color,
        size,
        disabled,
        text
    }}>{text}</mui.Button>
)

export const Default = Template.bind({})
Default.args = {
    variant: "contained",
    color: "primary",
    size: "medium",
    disabled: false,
    text: "Добави в каталог",
}