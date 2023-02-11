import React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { IconButtonPage } from "./IconButtonPage"
import { baseColors, baseVariants } from "../constants"


export default {
    title: "Base/IconButton/Page",
    component: IconButtonPage,
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
}) => <IconButtonPage
        mode={mode}
        variant={variant}
        color={color}
    />

export const Page = Template.bind({})
Page.args = {
    variant: "contained",
    color: "info",
}