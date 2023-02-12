import * as React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { alpha, DividerProps } from "@mui/material"
import { MuiBox, MuiDivider } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    component: MuiDivider,
    title: "Base/Divider",
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
        textAlign: {
            table: { disable: true },
        },
    },
} as Meta

type Props = DividerProps & {
}

const Template: StoryFn = (args: Props) => (
    <MuiBox sx={(theme) => ({
        display: "flex",
        position: "relative",
        padding: "20px",
        minHeight: "100px",
        overflow: "hidden",
        border: `1px solid ${alpha(theme.palette.text.primary, 0.25)}`,
    })}>
        <MuiDivider {...args} />
    </MuiBox>
)

export const Default = Template.bind({})
Default.args = {
    variant: "fullWidth",
    orientation: "vertical",
    light: false,
    flexItem: true,
    absolute: false,
}