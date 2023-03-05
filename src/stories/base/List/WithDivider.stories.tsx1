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
        divider: {
            control: { type: "boolean" },
        },
    },
} as Meta

type Props = ListProps & {
    disableGutters: boolean
    divider: boolean
}

const Template: StoryFn = (args) => {
    const { dense, disablePadding, disableGutters, divider } = args

    return <MuiPaper elevation={1} sx={{ width: "250px" }}>
        <MuiList {...{ dense, disablePadding }}>
            {items.map(item => (
                <MuiListItem
                    key={item.id}
                    {...{ disableGutters, divider }}
                >
                    {item.content}
                </MuiListItem>
            ))}
            <MuiListItem {...{ disableGutters }}>Елемент от списък</MuiListItem>
        </MuiList>
    </MuiPaper>
}

export const WithDivider = Template.bind({})
WithDivider.args = {
    dense: false,
    disablePadding: false,
    disableGutters: false,
    divider: true,
}