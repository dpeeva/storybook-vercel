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
        color: {
            options: baseColors,
            control: { type: "select" },
        },
    }
} as Meta


const Template: StoryFn = ({
    mode,
}) => <IconButtonPage
        mode={mode}
    />

export const Page = Template.bind({})