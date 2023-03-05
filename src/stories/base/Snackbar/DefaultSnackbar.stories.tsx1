import type { Meta, StoryFn } from "@storybook/react"
import { SnackbarProps } from "@mui/material"
import { MuiButton, MuiSnackbar } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Collection/Snackbar",
    component: MuiSnackbar,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
        // Additional props:
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
    // horizontal: SnackbarProps["anchorOrigin"]["horizontal"]
    // vertical: SnackbarProps["anchorOrigin"]["vertical"]
}

const Template: StoryFn = ({
    open,
    autoHideDuration,
    message,
    horizontal,
    vertical
}) => (
    <>
        <MuiSnackbar
            {...{ open, autoHideDuration, message }}
            anchorOrigin={{
                horizontal: horizontal,
                vertical: vertical
            }}
            action={
                <MuiButton
                    variant="contained"
                    color="primary"
                    size="small"
                >
                    Добре
                </MuiButton>
            }
            onClose={() => console.log("Closed!")}
            sx={{ width: "320px" }}
        />
    </>
)

export const Default = Template.bind({})
Default.args = {
    open: true,
    autoHideDuration: 6000,
    message: "Lorem Ipsum е елементарен примерен текст, използван в печатарската и типографската индустрия.",
}