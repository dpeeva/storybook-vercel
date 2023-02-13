import * as React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { Close } from "@mui/icons-material"
import { DialogProps, styled } from "@mui/material"
import { MuiBox, MuiButton, MuiDialog, MuiDialogActions, MuiDialogContent, MuiDialogTitle, MuiIconButton, MuiTypography } from "../../../mui"
import { textContent } from "."
import { argTypes } from "./argTypes"

export default {
    title: "Base/Collection/Dialog",
    component: MuiDialog,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
        // Additional props: 
        dividers: {
            control: { type: "boolean" },
        },
    },
} as Meta

const CloseButton = styled(MuiIconButton)(({ theme }) => ({
    position: "absolute",
    right: 8,
    top: 8,
    color: theme.palette.grey[500],
}))

type Props = DialogProps & {
    dividers: boolean
}

const Template: StoryFn = ({
    open,
    disableEscapeKeyDown,
    fullScreen,
    fullWidth,
    maxWidth,
    scroll,
    transitionDuration,
    dividers
}) => (<MuiBox>
    <MuiDialog {...{
        open, disableEscapeKeyDown, fullScreen,
        fullWidth, maxWidth, scroll, transitionDuration
    }}>
        <MuiDialogTitle>
            Заглавие
            <CloseButton
                size="small"
                aria-label="close"
            >
                <Close fontSize="small" />
            </CloseButton>
        </MuiDialogTitle>
        <MuiDialogContent dividers={dividers}>
            <MuiTypography>
                {textContent}
            </MuiTypography>
        </MuiDialogContent>
        <MuiDialogActions>
            <MuiButton variant="contained">
                Запази промените
            </MuiButton>
        </MuiDialogActions>
    </MuiDialog>
</MuiBox >
)

export const Open = Template.bind({})
Open.args = {
    open: true,
    disableEscapeKeyDown: false,
    fullScreen: false,
    fullWidth: true,
    maxWidth: "xs",
    scroll: "body",
    transitionDuration: 200,
    dividers: true,
}