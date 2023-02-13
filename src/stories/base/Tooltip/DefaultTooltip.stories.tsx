import type { Meta, StoryFn } from "@storybook/react"
import { FilterAltOutlined } from "@mui/icons-material"
import { TooltipProps } from "@mui/material"
import { MuiBox, MuiButton, MuiTooltip } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Tooltip",
    component: MuiTooltip,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
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
                color="primary"
                size="large"
            >
                <FilterAltOutlined />
            </MuiButton>
        </MuiTooltip>
    </MuiBox>
)

export const Default = Template.bind({})
Default.args = {
    title: "Tooltip",
    arrow: true,
    placement: "right-start",
}