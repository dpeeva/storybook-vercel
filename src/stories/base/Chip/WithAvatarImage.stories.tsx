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
    },
} as Meta

type Props = ChipProps & {
}

const Template: StoryFn = (args: Props) => (
    <MuiChip
        {...args}
        avatar={
            <MuiAvatar alt="Алтернативен текст" />
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