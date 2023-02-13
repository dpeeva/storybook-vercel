import React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { TilePage } from "./TilePage"


export default {
    title: "Tokens/Palette",
    component: TilePage,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {}
} as Meta


const Template: StoryFn = ({ }) => <TilePage />

export const Tiles = Template.bind({})