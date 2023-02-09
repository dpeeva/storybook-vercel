import type { Meta, StoryFn } from "@storybook/react"
import { mui } from "../../mui"
import { muiIcons } from "../../mui"
import { Button } from "./Button"
import { argTypes } from "./argTypes"

export default {
    title: "Button",
    component: Button,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
    },
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
    }}>
        <mui.SvgIcon>
            <muiIcons.AccessAlarm></muiIcons.AccessAlarm>
        </mui.SvgIcon>
        {text}
    </Button>
)

export const WithStartIcon = Template.bind({})
WithStartIcon.args = {
    mode: "joy",
    variant: "contained",
    color: "primary",
    size: "small",
    disabled: false,
    text: "Добави в каталог",
}