import type { Meta, StoryFn } from "@storybook/react"
import { ListProps } from "@mui/material"
import { MuiList, MuiListItem, MuiListItemButton, MuiListItemText, MuiPaper } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Collection/List",
    component: MuiList,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
        // Additional props:
        disableGutters: {
            control: { type: "boolean" },
        },
    },
} as Meta

type Props = ListProps & {
    disableGutters: boolean
}

const Template: StoryFn = (args) => {
    const { dense, disablePadding, disableGutters } = args

    return <MuiPaper elevation={1} sx={{ width: "250px" }}>
        <MuiList {...{ dense, disablePadding }}>
            <MuiListItem {...{ disableGutters }}>
                <MuiListItemButton>
                    <MuiListItemText primary="Категории" />
                </MuiListItemButton>
            </MuiListItem>
            <MuiListItem {...{ disableGutters }}>
                <MuiListItemButton>
                    <MuiListItemText primary="Етикети" />
                </MuiListItemButton>
            </MuiListItem>
            <MuiListItem {...{ disableGutters }}>
                <MuiListItemButton component="a" href="#">
                    <MuiListItemText primary="Раздели" />
                </MuiListItemButton>
            </MuiListItem>
        </MuiList>
    </MuiPaper>
}

export const WithButtons = Template.bind({})
WithButtons.args = {
    dense: false,
    disablePadding: false,
    disableGutters: false,
}