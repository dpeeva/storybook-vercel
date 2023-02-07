import type { Meta, StoryFn } from "@storybook/react"
import { mui, muiIcons } from "../../mui"
import { argTypes } from "./argTypes"

export default {
    component: mui.ButtonGroup,
    title: "ButtonGroup",
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
    },
} as Meta

const Template: StoryFn = ({
    variant,
    color,
    size,
    orientation,
    disabled,
    text
}) => (
    <mui.ButtonGroup {...{ variant, color, size, orientation, disabled }}>
        <mui.Button>{text}</mui.Button>
        <mui.Button>
            <muiIcons.ArrowDropDown />
        </mui.Button>
    </mui.ButtonGroup>
)

export const WithArrowButton = Template.bind({})
WithArrowButton.args = {
    variant: "contained",
    color: "primary",
    size: "small",
    orientation: "horizontal",
    disabled: false,
    text: "Button"
}