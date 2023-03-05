import type { Meta, StoryFn } from "@storybook/react"
import { Settings } from "@mui/icons-material"
import { ListProps } from "@mui/material"
import { MuiList, MuiListItem, MuiListItemIcon, MuiListItemText, MuiPaper, MuiTypography } from "../../../mui"
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
                <MuiListItemIcon><Settings /></MuiListItemIcon>
                <MuiListItemText>Елемент от списък</MuiListItemText>
            </MuiListItem>
            <MuiListItem {...{ disableGutters }}>
                <MuiListItemText>Елемент от списък</MuiListItemText>
                <MuiTypography>⌘C</MuiTypography>
            </MuiListItem>
            <MuiListItem {...{ disableGutters }}>
                <MuiListItemIcon><Settings /></MuiListItemIcon>
                <MuiListItemText>Елемент от списък</MuiListItemText>
                <MuiTypography>⌘C</MuiTypography>
            </MuiListItem>
        </MuiList>
    </MuiPaper>
}

export const WithIconAndText = Template.bind({})
WithIconAndText.args = {
    dense: false,
    disablePadding: false,
    disableGutters: false,
}