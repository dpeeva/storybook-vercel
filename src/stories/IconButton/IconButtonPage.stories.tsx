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
    disabled
}) => (
    <IconButtonPage
        mode={mode}
        disabled={disabled}
    />
)

export const Page = Template.bind({})
Page.args = {
    disabled: false,
}