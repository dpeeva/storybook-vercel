import type { Meta, StoryFn } from "@storybook/react"
import { mui } from "../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Typography",
    component: mui.Typography,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
        fontWeight: {
            table: { disable: true },
        },
    },
} as Meta


const Template: StoryFn = (args: mui.TypographyProps) => (
    <mui.Typography variant="h1" {...args}>
        Switch between Typography variants
    </mui.Typography>
)

export const Default = Template.bind({})
Default.args = {
    variant: "h5",
    align: "inherit",
    // fontWeight: 400,
    gutterBottom: false,
    noWrap: false,
    paragraph: false,
}