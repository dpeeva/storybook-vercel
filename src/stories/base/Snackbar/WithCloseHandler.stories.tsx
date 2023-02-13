import * as React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { Close } from "@mui/icons-material"
import { AlertProps, SnackbarProps } from "@mui/material"
import { MuiAlert, MuiIconButton, MuiSnackbar } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Snackbar",
    component: MuiSnackbar,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
        open: {
            table: { disable: true },
        },
        // Additional props:
        variant: {
            options: ["filled", "outlined", "standard"],
            control: { type: "radio" },
            defaultValue: "filled",
            table: { disable: true },
        },
        severity: {
            options: ["error", "success", "info", "warning"],
            control: { type: "radio" },
            defaultValue: "error",
            table: { disable: true },
        },
        horizontal: {
            options: ["right", "left"],
            control: { type: "radio" },
            defaultValue: "right",
            table: { disable: true },
        },
        vertical: {
            options: ["top", "bottom"],
            control: { type: "radio" },
            defaultValue: "top",
            table: { disable: true },
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
}) => {
    const [isOpen, setOpen] = React.useState(open)

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") {
            return
        }
        setOpen(!isOpen)
    }

    return <MuiSnackbar
        {...{ autoHideDuration, message }}
        open={isOpen}
        anchorOrigin={{
            horizontal: horizontal,
            vertical: vertical
        }}
        onClose={handleClose}
        sx={{ width: "320px" }}
    >
        <MuiAlert
            variant={variant}
            severity={severity}
            onClose={handleClose}
            action={
                <MuiIconButton
                    size="small"
                    onClick={handleClose}
                >
                    <Close fontSize="inherit" />
                </MuiIconButton>
            }
        >
            {message}
        </MuiAlert>
    </MuiSnackbar>
}

export const WithCloseHandler = Template.bind({})
WithCloseHandler.args = {
    open: true,
    autoHideDuration: 6000, // Wait time before onclose is automatically executed
    message: "Lorem Ipsum е елементарен примерен текст, използван в печатарската и типографската индустрия.",
}