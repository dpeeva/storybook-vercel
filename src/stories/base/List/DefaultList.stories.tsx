import type { Meta, StoryFn } from "@storybook/react"
import { ListProps } from "@mui/material"
import { MuiList, MuiListItem, MuiPaper } from "../../../mui"
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

const Template: StoryFn = (args) => (
    <MuiPaper elevation={1} sx={{ width: "250px" }}>
        <MuiList {...args}>
            {[0, 1, 2].map((item, i) => (
                <MuiListItem
                    key={`${item}-${i}`}
                    disableGutters={args.disableGutters}
                >Елемент от списък</MuiListItem>
            ))}
        </MuiList>
    </MuiPaper>
)

export const Default = Template.bind({})
Default.args = {
    dense: false,
    disablePadding: false,
    disableGutters: false,
}