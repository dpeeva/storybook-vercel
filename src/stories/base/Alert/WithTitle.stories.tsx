import type { Meta, StoryFn } from "@storybook/react"
import { AlertProps } from "@mui/material"
import { MuiAlert, MuiAlertTitle } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Alert",
    component: MuiAlert,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
        // Additional props:
        title: {
            control: { type: "text" },
        },
        content: {
            control: { type: "text" },
        },
    },
} as Meta

type Props = AlertProps & {
    title: string
    content: string
}

const Template: StoryFn = ({
    variant,
    severity,
    elevation,
    title,
    content
}) => (
    <MuiAlert
        {...{ variant, severity, elevation }}
        sx={{ width: "320px" }}
    >
        {title && <MuiAlertTitle>{title}</MuiAlertTitle>}
        {content}
    </MuiAlert>
)

export const WithTitle = Template.bind({})
WithTitle.args = {
    variant: "filled",
    severity: "error",
    title: "Заглавие",
    content: undefined,
}