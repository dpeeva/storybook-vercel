import type { Meta, StoryFn } from "@storybook/react"
import { Star } from "@mui/icons-material"
import { IconProps, MenuProps } from "@mui/material"
import { MuiListItemIcon, MuiListItemText, MuiMenu, MuiMenuItem, MuiTypography } from "../../../mui"
import { baseSizes } from "../../constants"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Menu",
    component: MuiMenu,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
        // Additional props:
        dense: {
            control: { type: "boolean" },
            defaultValue: false,
        },
        disableGutters: {
            control: { type: "boolean" },
            defaultValue: false,
        },
        divider: {
            control: { type: "boolean" },
            defaultValue: false,
        },
        iconSize: {
            options: [...baseSizes, "inherit"],
            control: { type: "radio" },
            defaultValue: "small",
        },
    },
} as Meta

type Props = MenuProps & {
    dense: boolean
    disableGutters: boolean
    divider: boolean
    iconSize: IconProps["fontSize"]
}

const Template: StoryFn = ({
    variant,
    open,
    dense,
    disableGutters,
    divider,
    iconSize
}) => (
    <MuiMenu
        {...{ variant, open }}
        sx={{
            ".MuiMenu-list": {
                minWidth: "250px"
            }
        }}
    >
        <MuiMenuItem {...{ dense, disableGutters, divider }}>
            <MuiListItemText>Текст на елемента</MuiListItemText>
        </MuiMenuItem>
        <MuiMenuItem {...{ dense, disableGutters, divider }}>
            <MuiTypography>Typography Text</MuiTypography>
        </MuiMenuItem>
        <MuiMenuItem {...{ dense, disableGutters, divider }}>
            <MuiListItemIcon>
                <Star fontSize={iconSize} />
            </MuiListItemIcon>
            <MuiListItemText>Текст на елемента</MuiListItemText>
        </MuiMenuItem>
        <MuiMenuItem {...{ dense, disableGutters, divider }}>
            <MuiListItemText>Текст на елемента</MuiListItemText>
            <MuiTypography>⌘C</MuiTypography>
        </MuiMenuItem>
        <MuiMenuItem {...{ dense, disableGutters, divider }}>
            <MuiListItemIcon>
                <Star fontSize={iconSize} />
            </MuiListItemIcon>
            <MuiListItemText>Текст на елемента</MuiListItemText>
            <MuiTypography>⌘C</MuiTypography>
        </MuiMenuItem>
    </MuiMenu>
)

export const Open = Template.bind({})
Open.args = {
    variant: "menu",
    open: true,
    dense: false,
    disableGutters: false,
    divider: false,
    iconSize: "small",
}