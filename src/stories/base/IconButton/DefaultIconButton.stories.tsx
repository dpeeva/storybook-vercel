import type { Meta, StoryFn } from "@storybook/react"
import { Close } from "@mui/icons-material"
import { IconButtonProps, IconProps } from "@mui/material"
import { MuiIconButton } from "../../../mui"
import { baseSizes } from "../../constants"
import { argTypes } from "./argTypes"

export default {
    title: "Base/IconButton",
    component: MuiIconButton,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
        // Additional props:
        iconFontSize: {
            options: ["inherit", ...baseSizes],
            control: { type: "radio" },
        }
    },
} as Meta

interface Props extends IconButtonProps {
    iconFontSize: IconProps["fontSize"]
}

const Template: StoryFn = ({
    color,
    size,
    disabled,
    iconFontSize
}) => (
    <MuiIconButton {...{ color, size, disabled }}>
        <Close fontSize={iconFontSize} color={"inherit"} />
    </MuiIconButton>
)

export const Default = Template.bind({})
Default.args = {
    color: "primary", // defaults to primary when not set
    size: "medium",
    disabled: false,
    iconFontSize: "inherit",
}