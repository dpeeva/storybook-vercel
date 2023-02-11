import type { Meta, StoryFn } from "@storybook/react"
import { IconButton } from "./IconButton"
import { argTypes } from "./argTypes"
import { Add } from "@mui/icons-material"

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
    text
}) => (
    <IconButton {...{
        mode,
        variant,
        color,
        size,
        disabled
    }}>
        <Add fontSize="small" />
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