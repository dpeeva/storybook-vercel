import React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { IconButtonPage } from "./IconButtonPage"
import { baseColors } from "../constants"

export default {
    title: "Base/IconButton/Page",
    component: IconButtonPage,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        disabled: {
            control: { type: "boolean" },
        },
    }
} as Meta


const Template: StoryFn = ({
    mode,
    size,
    disabled
}) => (
    <IconButtonPage
        mode={mode}
        size={size}
        disabled={disabled}
    />
)

export const Page = Template.bind({})
Page.args = {
    size: "small",
    disabled: false,
}