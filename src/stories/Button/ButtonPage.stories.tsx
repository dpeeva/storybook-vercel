import React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { ButtonPage } from "./ButtonPage"


export default {
    title: "Base/Button/Page",
    component: ButtonPage,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {}
} as Meta


const Template: StoryFn = ({ }) => <ButtonPage />

export const Page = Template.bind({})