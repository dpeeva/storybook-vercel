import type { Meta, StoryFn } from "@storybook/react"
import { AddCircle } from "@mui/icons-material"
import { ButtonProps } from "@mui/material"
import { MuiButton } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Collection/Button",
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
    },
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
}: Props) => (
    <MuiButton
        {...{ variant, color, size, disabled }}
        endIcon={<AddCircle />}
    >{text}</MuiButton>
)

export const WithEndIcon = Template.bind({})
WithEndIcon.args = {
    variant: "contained",
    color: "primary",
    size: "medium",
    disabled: false,
    text: "Добави в каталог",
}