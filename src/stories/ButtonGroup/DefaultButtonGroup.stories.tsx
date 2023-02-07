import type { Meta, StoryFn } from "@storybook/react"
import { mui } from "../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "ButtonGroup",
    component: mui.ButtonGroup,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
    }
} as Meta

const Template: StoryFn = ({
    variant,
    color,
    size,
    orientation,
    disabled,
    text
}) => {
    return <mui.ButtonGroup
        {...{ variant, color, size, orientation, disabled }}
    >
        <mui.Button>{text}</mui.Button>
        <mui.Button>{text}</mui.Button>
        <mui.Button>{text}</mui.Button>
    </mui.ButtonGroup>
}

export const Default = Template.bind({})
Default.args = {
    variant: "contained",
    color: "primary",
    size: "small",
    disabled: false,
    text: "Button"
}