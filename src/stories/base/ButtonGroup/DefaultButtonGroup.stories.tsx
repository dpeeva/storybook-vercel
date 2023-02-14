import type { Meta, StoryFn } from "@storybook/react"
import { MuiButton, MuiButtonGroup } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Collection/ButtonGroup",
    component: MuiButtonGroup,
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
    return <MuiButtonGroup
        {...{ variant, color, size, orientation, disabled }}
    >
        <MuiButton>{text}</MuiButton>
        <MuiButton>{text}</MuiButton>
        <MuiButton>{text}</MuiButton>
    </MuiButtonGroup>
}

export const Default = Template.bind({})
Default.args = {
    variant: "contained",
    color: "primary",
    size: "medium",
    disabled: false,
    text: "Button"
}