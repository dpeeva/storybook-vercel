import * as React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { Close } from "@mui/icons-material"
import { IconProps } from "@mui/material"
import { MuiIcon } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Collection/Icon",
    component: MuiIcon,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
    },
} as Meta

interface Props extends IconProps {
}

const Template: StoryFn = (args) => (
    <Close
        {...args} // Causing Error: Property 'component' is missing in type
        color={args.color}
        fontSize={args.fontSize}
    />
)

export const Default = Template.bind({})
Default.args = {
    color: "primary",
    fontSize: "small",
}