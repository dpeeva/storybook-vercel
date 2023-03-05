import type { Meta, StoryFn } from "@storybook/react"
import { MenuProps } from "@mui/material"
import { MuiMenu, MuiMenuItem } from "../../../mui"
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
    },
} as Meta

type Props = MenuProps & {
    dense: boolean
    disableGutters: boolean
    divider: boolean
}

const Template: StoryFn = ({
    variant,
    open,
    dense,
    disableGutters,
    divider,
}) => (
    <MuiMenu
        {...{ variant, open }}
        sx={{
            maxHeight: "200px",
            ".MuiMenu-list": {
                minWidth: "250px"
            }
        }}
    >
        {items.map(item => (
            <MuiMenuItem
                key={item.id}
                {...{ dense, disableGutters, divider }}
            >{item.content}</MuiMenuItem>
        ))}
    </MuiMenu>
)

export const WithScrollbar = Template.bind({})
WithScrollbar.args = {
    variant: "menu",
    open: true,
    dense: false,
    disableGutters: false,
    divider: false,
}