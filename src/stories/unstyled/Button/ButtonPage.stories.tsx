import React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { ButtonPage } from "./ButtonPage"


export default {
    title: "Sample/Button/Page",
    component: ButtonPage,
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
    <ButtonPage
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