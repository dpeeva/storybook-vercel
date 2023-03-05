import * as React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { ToggleButtonGroupProps, ToggleButtonProps } from "@mui/material"
import { MuiToggleButton, MuiToggleButtonGroup } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Collection/ToggleButton",
    component: MuiToggleButton,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
        // Additional props:
        orientation: {
            options: ["horizontal", "vertical"],
            control: { type: "radio" },
        },
    },
} as Meta

type Props = ToggleButtonProps & {
    orientation: ToggleButtonGroupProps["orientation"]
}

const Template: StoryFn = ({
    color,
    size,
    disabled,
    orientation
}) => (
    <MuiToggleButtonGroup orientation={orientation}>
        <MuiToggleButton
            {...{ color, size, disabled }}
            value="hide"
            aria-label={"hide"}
        >
            Скрий
        </MuiToggleButton>
        <MuiToggleButton
            {...{ color, size, disabled }}
            value="show"
            aria-label={"show"}
            selected
        >
            Покажи
        </MuiToggleButton>
    </MuiToggleButtonGroup>
)

export const Default = Template.bind({})
Default.args = {
    color: "primary",
    size: "medium",
    disabled: false,
    orientation: "horizontal",
}