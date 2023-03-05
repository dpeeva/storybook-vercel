import type { Meta, StoryFn } from "@storybook/react"
import { ChipProps } from "@mui/material"
import { MuiChip } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Collection/Chip",
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
        onDelete={() => { }}
    />
)

export const WithClose = Template.bind({})
WithClose.args = {
    color: "default",
    variant: "filled",
    size: "medium",
    label: "С опция за изтриване",
    disabled: false,
}