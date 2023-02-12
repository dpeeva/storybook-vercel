import type { Meta, StoryFn } from "@storybook/react"
import { ArrowBack } from "@mui/icons-material"
import { ChipProps } from "@mui/material"
import { MuiChip } from "../../../mui"
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
        icon={<ArrowBack fontSize="small" />}
    />
)

export const WithIcon = Template.bind({})
WithIcon.args = {
    color: "default",
    variant: "filled",
    size: "medium",
    label: "Чип",
    disabled: false,
}