import React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { TilePage } from "./TilePage"


export default {
    title: "Sample/Tile/Page",
    component: TilePage,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {}
} as Meta


const Template: StoryFn = ({ }) => <TilePage />

export const Page = Template.bind({})