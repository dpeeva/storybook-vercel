import React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { baseColors, baseVariants } from "../constants"
import { IconsPage } from "./IconsPage"

export default {
    title: "Base/Icons/Page",
    component: IconsPage,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        variant: {
            options: baseVariants,
            control: { type: "radio" },
        },
        color: {
            options: baseColors,
            control: { type: "select" },
        },
    }
} as Meta


const Template: StoryFn = ({
    mode,
    variant,
    color,
}) => <IconsPage
        mode={mode}
        variant={variant}
        color={color}
    />

export const Page = Template.bind({})
Page.args = {
    variant: "contained",
    color: "info",
}