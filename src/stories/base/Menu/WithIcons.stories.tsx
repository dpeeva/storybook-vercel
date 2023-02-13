import type { Meta, StoryFn } from "@storybook/react"
import { ErrorOutline } from "@mui/icons-material"
import { IconProps, MenuProps } from "@mui/material"
import { MuiListItemIcon, MuiListItemText, MuiMenu, MuiMenuItem } from "../../../mui"
import { items } from "."
import { argTypes } from "./argTypes"

export default {
    title: "Base/Collection/Menu",
    component: MuiMenu,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
        // Additional props:
        dense: {
            control: { type: "boolean" },
        },
        disableGutters: {
            control: { type: "boolean" },
        },
        divider: {
            control: { type: "boolean" },
        },
        iconSize: {
            options: ["small", "medium", "large", "inherit"],
            control: { type: "radio" },
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
        {items.map(item => (
            <MuiMenuItem
                key={item.id}
                {...{ dense, disableGutters, divider }}
            >
                <MuiListItemIcon>
                    <ErrorOutline fontSize={iconSize} />
                </MuiListItemIcon>
                <MuiListItemText>Репорт</MuiListItemText>
            </MuiMenuItem>
        ))}
    </MuiMenu>
)

export const WithIcon = Template.bind({})
WithIcon.args = {
    variant: "menu",
    open: true,
    dense: false,
    disableGutters: false,
    divider: true,
    iconSize: "small",
}