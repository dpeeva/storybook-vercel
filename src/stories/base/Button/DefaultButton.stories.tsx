import type { Meta, StoryFn } from "@storybook/react"
import { ButtonProps } from "@mui/material"
import { MuiButton } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Button",
    component: MuiButton,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
        // Additional props:
        text: {
            control: { type: "text" },
        }
    }
} as Meta

type Props = ButtonProps & {
    text?: string // TODO: check why not mandatory
}

const Template: StoryFn = ({
    variant,
    color,
    size,
    disabled,
    text
}) => (
    <MuiButton {...{
        variant,
        color,
        size,
        disabled,
        text
    }}>{text}</MuiButton>
)

export const Default = Template.bind({})
Default.args = {
    variant: "contained",
    color: "primary",
    size: "medium",
    disabled: false,
    text: "Добави в каталог",
}