import type { Meta, StoryFn } from "@storybook/react"
import { AlertProps } from "@mui/material"
import { MuiAlert, MuiAlertTitle, MuiButton } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Collection/Alert",
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
        action={
            <MuiButton
                variant={variant == "filled" ? "outlined" : "contained"}
                color={"inherit"}
                size="small"
            >
                Приеми
            </MuiButton>
        }
        sx={{ width: "400px" }}
    >
        {title && <MuiAlertTitle>{title}</MuiAlertTitle>}
        {content}
    </MuiAlert>
)

export const WithActionButton = Template.bind({})
WithActionButton.args = {
    variant: "filled",
    severity: "error",
    title: "Заглавие на съобщението",
    content: undefined,
}