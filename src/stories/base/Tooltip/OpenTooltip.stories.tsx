import type { Meta, StoryFn } from "@storybook/react"
import { FilterAltOutlined } from "@mui/icons-material"
import { TooltipProps } from "@mui/material"
import { MuiBox, MuiButton, MuiTooltip } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Collection/Tooltip",
    component: MuiTooltip,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
        open: {
            control: { type: "boolean" },
        },
    },
} as Meta

type Props = TooltipProps & {
}

const Template: StoryFn = ({
    title,
    placement,
    arrow,
    open,
}) => (
    <MuiBox sx={{ padding: "50px" }}>
        <MuiTooltip {...{
            title,
            placement,
            arrow,
            open,
        }}>
            <MuiButton
                variant="contained"
                color={"primary"}
                size="large"
            >
                <FilterAltOutlined />
            </MuiButton>
        </MuiTooltip>
    </MuiBox>
)

export const Open = Template.bind({})
Open.args = {
    title: "Tooltip",
    placement: "top-start",
    arrow: true,
    open: true,
}