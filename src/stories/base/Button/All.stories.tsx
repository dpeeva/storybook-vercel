import type { Meta, StoryFn } from "@storybook/react"
import { MuiButton, MuiStack } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Collection/Button",
    component: MuiButton,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
        // Additional props:
        text: {
            control: { type: "text" },
        }
    }
} as Meta


const Template: StoryFn = ({
    color,
    size,
    disabled,
    text
}) => (
    <MuiStack spacing={2} direction="row" sx={{
        flexWrap: "wrap",
    }}>
        <MuiButton {...{
            color,
            size,
            disabled,
            text
        }} variant="contained">{text}</MuiButton>
        <MuiButton {...{
            color,
            size,
            disabled,
            text
        }} variant="outlined">{text}</MuiButton>
        <MuiButton {...{
            color,
            size,
            disabled,
            text
        }} variant="text">{text}</MuiButton>
    </MuiStack>
)

export const All = Template.bind({})
All.args = {
    color: "primary",
    size: "medium",
    disabled: false,
    text: "Добави в каталог",
}