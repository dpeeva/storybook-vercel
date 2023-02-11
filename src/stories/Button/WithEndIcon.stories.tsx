import type { Meta, StoryFn } from "@storybook/react"
import { muiIcons } from "../../mui"
import { Button } from "./Button"
import { argTypes } from "./argTypes"
import { Adornment } from "./Adornment"

export default {
    title: "Base/Button",
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
        {text}
        <Adornment position="end">
            <muiIcons.AccessAlarm fontSize="small" />
        </Adornment>
    </Button>
)

export const WithEndIcon = Template.bind({})
WithEndIcon.args = {
    mode: "joy",
    variant: "contained",
    color: "primary",
    size: "small",
    disabled: false,
    text: "Добави в каталог",
}