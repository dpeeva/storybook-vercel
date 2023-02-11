import type { Meta, StoryFn } from "@storybook/react"
import { Button } from "./Button"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Button",
    component: Button,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
    }
} as Meta

const Template: StoryFn = ({
    mode,
    variant,
    color,
    size,
    disabled,
    text
}) => (
    <Button {...{
        mode,
        variant,
        color,
        size,
        disabled
    }}>{text}</Button>
)

export const Default = Template.bind({})
Default.args = {
    mode: "joy",
    variant: "contained",
    color: "primary",
    size: "small",
    disabled: false,
    text: "Добави в каталог",
}