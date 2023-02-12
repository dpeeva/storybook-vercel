import type { Meta, StoryFn } from "@storybook/react"
import { ChipProps } from "@mui/material"
import { MuiAvatar, MuiChip } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Chip",
    component: MuiChip,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
        // Additional props:
        avatarText: {
            control: { type: "text" },
            defaultValue: "M",
        },
    },
} as Meta

type Props = ChipProps & {
    avatarText: string
}

const Template: StoryFn = ({
    variant,
    color,
    size,
    label,
    disabled,
    avatarText
}) => (
    <MuiChip
        {...{ variant, color, size, label, disabled }}
        avatar={
            <MuiAvatar color="inherit">{avatarText}</MuiAvatar>
        }
    />
)

export const WithAvatarText = Template.bind({})
WithAvatarText.args = {
    color: "default",
    variant: "filled",
    size: "medium",
    label: "Аватар",
    disabled: false,
}