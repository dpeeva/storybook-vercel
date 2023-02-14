import type { Meta, StoryFn } from "@storybook/react"
import { RatingProps } from "@mui/material"
import { MuiRating } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Collection/Rating",
    component: MuiRating,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
    },
} as Meta

type Props = RatingProps & {
}

const Template: StoryFn = (args: Props) => (
    <MuiRating {...args} />
)

export const Default = Template.bind({})
Default.args = {
    size: "medium",
    value: 1,
    precision: 1,
    max: 5,
    highlightSelectedOnly: false,
    readOnly: false,
    disabled: false,
}