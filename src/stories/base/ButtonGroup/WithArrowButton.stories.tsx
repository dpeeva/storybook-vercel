import type { Meta, StoryFn } from "@storybook/react"
import { ArrowDropDown } from "@mui/icons-material"
import { MuiButton, MuiButtonGroup } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Collection/ButtonGroup",
    component: MuiButtonGroup,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
    },
} as Meta

const Template: StoryFn = ({
    variant,
    color,
    size,
    orientation,
    disabled,
    text
}) => (
    <MuiButtonGroup {...{ variant, color, size, orientation, disabled }}>
        <MuiButton>{text}</MuiButton>
        <MuiButton>
            <ArrowDropDown />
        </MuiButton>
    </MuiButtonGroup>
)

export const WithArrowButton = Template.bind({})
WithArrowButton.args = {
    variant: "contained",
    color: "primary",
    size: "small",
    orientation: "horizontal",
    disabled: false,
    text: "Button"
}