import type { Meta, StoryFn } from "@storybook/react"
import { Add } from "@mui/icons-material"
import { IconButton } from "./IconButton"
import { argTypes } from "./argTypes"

export default {
    title: "Base/IconButton",
    component: IconButton,
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
}) => (
    <IconButton {...{
        mode,
        variant,
        color,
        size,
        disabled
    }}>
        <Add />
    </IconButton>
)

export const Default = Template.bind({})
Default.args = {
    mode: "joy",
    variant: "contained",
    color: "primary",
    size: "small",
    disabled: false,
}