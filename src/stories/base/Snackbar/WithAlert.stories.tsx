import type { Meta, StoryFn } from "@storybook/react"
import { AlertProps, SnackbarProps } from "@mui/material"
import { MuiAlert, MuiSnackbar } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Snackbar",
    component: MuiSnackbar,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
        // Additional props:
        variant: {
            options: ["filled", "outlined", "standard"],
            control: { type: "radio" },
            defaultValue: "filled",
        },
        severity: {
            options: ["error", "success", "info", "warning"],
            control: { type: "radio" },
            defaultValue: "error",
        },
        horizontal: {
            options: ["right", "left"],
            control: { type: "radio" },
            defaultValue: "right",
        },
        vertical: {
            options: ["top", "bottom"],
            control: { type: "radio" },
            defaultValue: "top",
        },
    },
} as Meta

type Props = SnackbarProps & {
    variant: AlertProps["variant"]
    severity: AlertProps["severity"]
    // horizontal: SnackbarProps["anchorOrigin"]["horizontal"]
    // vertical: SnackbarProps["anchorOrigin"]["vertical"]
}

const Template: StoryFn = ({
    open,
    autoHideDuration,
    message,
    variant,
    severity,
    horizontal,
    vertical
}) => (
    <MuiSnackbar
        {...{ open, autoHideDuration }}
        anchorOrigin={{
            horizontal: horizontal,
            vertical: vertical
        }}
        sx={{ width: "320px" }}
    >
        <MuiAlert
            variant={variant}
            severity={severity}
        >
            {message}
        </MuiAlert>
    </MuiSnackbar>
)

export const WithAlert = Template.bind({})
WithAlert.args = {
    open: true,
    autoHideDuration: 6000,
    message: "Lorem Ipsum е елементарен примерен текст, използван в печатарската и типографската индустрия.",
}