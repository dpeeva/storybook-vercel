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
        // Additional props:
        text: {
            control: { type: "text" },
        },
    },
} as Meta

type Props = DividerProps & {
    text: string
}

const Template: StoryFn = ({
    variant,
    orientation,
    light,
    flexItem,
    absolute,
    textAlign,
    text
}) => (
    <MuiBox sx={(theme) => ({
        display: "flex",
        position: "relative",
        padding: "20px",
        minHeight: "100px",
        overflow: "hidden",
        border: `1px solid ${alpha(theme.palette.text.primary, 0.25)}`,
    })}>
        <MuiDivider
            {...{ variant, orientation, light, flexItem, absolute, textAlign }}
        >
            {text}
        </MuiDivider>
    </MuiBox>
)

export const WithText = Template.bind({})
WithText.args = {
    variant: "fullWidth",
    orientation: "horizontal",
    light: false,
    flexItem: true,
    absolute: true,
    textAlign: "center",
    text: "Текст",
}