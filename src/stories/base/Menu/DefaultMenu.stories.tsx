import * as React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { MenuProps } from "@mui/material"
import { MuiBox, MuiButton, MuiMenu, MuiMenuItem } from "../../../mui"
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
        open: {
            table: { disable: true },
        },
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
    divider
}) => {
    const [element, setElement] = React.useState(null)
    const handleClick = (event: any, setter: React.Dispatch<any>) => {
        setter(event.currentTarget)
    }
    const handleClose = (setter: React.Dispatch<any>) => {
        setter(null)
    }
    const isOpen = (anchorEl: any) => Boolean(anchorEl)

    return <MuiBox>
        <MuiButton
            variant="contained"
            onClick={e => handleClick(e, setElement)}
        >Отвори менюто</MuiButton>

        <MuiMenu
            {...{ variant, open }}
            anchorEl={element}
            open={isOpen(element)}
            onClose={e => handleClose(setElement)}
        >
            {items.map(item => (
                <MuiMenuItem
                    key={item.id}
                    {...{ dense, disableGutters, divider }}
                >{item.content}</MuiMenuItem>
            ))}
        </MuiMenu>
    </MuiBox>
}

export const Default = Template.bind({})
Default.args = {
    variant: "menu",
    open: false,
    dense: false,
    disableGutters: false,
    divider: false,
}