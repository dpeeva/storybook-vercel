import type { Meta, StoryFn } from "@storybook/react"
import { Close } from "@mui/icons-material"
import { AlertProps } from "@mui/material"
import { MuiAlert, MuiAlertTitle, MuiButton, MuiIconButton } from "../../../mui"
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
        action={<>
            <MuiButton
                variant={variant == "filled" ? "outlined" : "contained"}
                color={"inherit"}
                size="small"
            >
                Приеми
            </MuiButton>
            <MuiIconButton color="inherit" size="small">
                <Close fontSize="inherit" />
            </MuiIconButton>
        </>}
        sx={{ width: "400px" }}
    >
        {title && <MuiAlertTitle>{title}</MuiAlertTitle>}
        {content}
    </MuiAlert>
)

export const WithActionButtonAndClose = Template.bind({})
WithActionButtonAndClose.args = {
    variant: "filled",
    severity: "error",
    title: "Заглавие на съобщението",
    content: undefined,
}