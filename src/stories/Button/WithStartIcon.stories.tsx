import type { Meta, StoryFn } from "@storybook/react"
import { AddCircle } from "@mui/icons-material"
import { Adornment } from "./Adornment"
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
        <Adornment position="start" size={size}>
            <AddCircle />
        </Adornment>
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