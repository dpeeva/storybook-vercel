import React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { ButtonPage } from "./ButtonPage"


export default {
    title: "Base/Button/Page",
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
    disabled
}) => (
    <ButtonPage
        disabled={disabled}
    />
)

export const Page = Template.bind({})
Page.args = {
    disabled: false,
}