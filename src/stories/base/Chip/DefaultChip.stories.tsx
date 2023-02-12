import type { Meta, StoryFn } from "@storybook/react"
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
        onClick={() => { }}
    />
)

export const Default = Template.bind({})
Default.args = {
    color: "default",
    variant: "filled",
    label: "Чип",
    size: "medium",
    disabled: false,
}