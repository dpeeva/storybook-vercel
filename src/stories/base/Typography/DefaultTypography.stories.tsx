import type { Meta, StoryFn } from "@storybook/react"
import { TypographyProps } from "@mui/material"
import { MuiTypography } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Typography",
    component: MuiTypography,
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


const Template: StoryFn = (args: TypographyProps) => (
    <MuiTypography variant="h1" {...args}>
        Switch between Typography variants
    </MuiTypography>
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