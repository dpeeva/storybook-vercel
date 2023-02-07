import type { Meta, StoryFn } from "@storybook/react"
import { mui } from "../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Button",
    component: mui.Button,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
    }
} as Meta

const Template: StoryFn = (args: mui.ButtonProps) => (
    <mui.Button {...args}>Button</mui.Button>
)

export const Default = Template.bind({})
Default.args = {
    variant: "contained",
    color: "primary",
    size: "small",
    disabled: false,
}