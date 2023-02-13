import type { Meta, StoryFn } from "@storybook/react"
import { ListProps } from "@mui/material"
import { MuiList, MuiListItem, MuiPaper, MuiTypography } from "../../../mui"
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
            subheader={
                <MuiTypography
                    variant={"subtitle1"}
                    fontWeight={"bold"}
                    p={2}
                >Подзаглавие</MuiTypography>
            }
        >
            <MuiListItem {...{ disableGutters }}>Елемент от списък</MuiListItem>
            <MuiListItem {...{ disableGutters }}>Елемент от списък</MuiListItem>
            <MuiListItem {...{ disableGutters }}>Елемент от списък</MuiListItem>
        </MuiList>
    </MuiPaper>
}

export const WithSubheader = Template.bind({})
WithSubheader.args = {
    dense: false,
    disablePadding: false,
    disableGutters: false,
}