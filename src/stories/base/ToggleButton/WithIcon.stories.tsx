import * as React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { FormatAlignCenter, FormatAlignLeft, FormatAlignRight } from "@mui/icons-material"
import { ToggleButtonGroupProps, ToggleButtonProps } from "@mui/material"
import { MuiToggleButton, MuiToggleButtonGroup } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/ToggleButton",
    component: MuiToggleButton,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
        // Additional props:
        orientation: {
            options: ["horizontal", "vertical"],
            defaultValue: "horizontal",
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
            value="left"
            aria-label={"left"}
        >
            <FormatAlignLeft fontSize="inherit" />
        </MuiToggleButton>
        <MuiToggleButton
            {...{ color, size, disabled }}
            value="center"
            aria-label={"center"}
            selected
        >
            <FormatAlignCenter fontSize="inherit" />
        </MuiToggleButton>
        <MuiToggleButton
            {...{ color, size, disabled }}
            value="right"
            aria-label={"right"}
        >
            <FormatAlignRight fontSize="inherit" />
        </MuiToggleButton>
    </MuiToggleButtonGroup>
)

export const WithIcon = Template.bind({})
WithIcon.args = {
    color: "primary",
    size: "small",
    disabled: false,
}