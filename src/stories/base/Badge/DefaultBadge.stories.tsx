import type { Meta, StoryFn } from "@storybook/react"
import { Mail } from "@mui/icons-material"
import { BadgeProps } from "@mui/material"
import { MuiBadge } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Badge",
    component: MuiBadge,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
        // Additional props:
        horizontal: {
            options: ["right", "left"],
            control: { type: "radio" },
        },
        vertical: {
            options: ["top", "bottom"],
            control: { type: "radio" },
        },
    },
} as Meta

type Props = BadgeProps & {
    // horizontal: BadgeProps["anchorOrigin"]["horizontal"]
    // vertical: BadgeProps["anchorOrigin"]["vertical"]
}

const Template: StoryFn = ({
    variant,
    color,
    badgeContent,
    invisible,
    showZero,
    horizontal,
    vertical
}) => (
    <MuiBadge
        {...{ variant, color, badgeContent, invisible, showZero }}
        anchorOrigin={{
            horizontal: horizontal,
            vertical: vertical
        }}
    >
        <Mail color="action" />
    </MuiBadge>
)

export const Default = Template.bind({})
Default.args = {
    variant: "standard",
    color: "primary",
    badgeContent: 10,
    invisible: false,
    showZero: true,
    horizontal: "right",
    vertical: "top",
}