import type { Meta, StoryFn } from "@storybook/react"
import { ListProps } from "@mui/material"
import { MuiList, MuiListItem, MuiPaper } from "../../../mui"
import { items } from "."
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
        <MuiList
            {...{ dense, disablePadding }}
            sx={{
                maxHeight: "250px",
                overflowY: "auto",
            }}
        >
            {items.map(item => (
                <MuiListItem
                    key={item.id}
                    {...{ disableGutters }}
                >{item.content}</MuiListItem>
            ))}
        </MuiList>
    </MuiPaper>
}

export const WithScrollbar = Template.bind({})
WithScrollbar.args = {
    dense: false,
    disablePadding: false,
    disableGutters: false,
}