import * as React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { Close } from "@mui/icons-material"
import { DialogProps, styled } from "@mui/material"
import { MuiBox, MuiButton, MuiDialog, MuiDialogActions, MuiDialogContent, MuiDialogTitle, MuiIconButton, MuiTypography } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Collection/Dialog",
    component: MuiDialog,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
        open: {
            table: { disable: true },
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
}

const Template: StoryFn = (args) => {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return <MuiBox>
        <MuiButton
            variant="contained"
            onClick={handleOpen}
        >Покажи повече</MuiButton>

        <MuiDialog
            {...args}
            open={open}
            onClose={handleClose}
        >
            <MuiDialogTitle>
                Заглавие
                <CloseButton
                    size="small"
                    onClick={handleClose}
                    aria-label="close"
                >
                    <Close fontSize="small" />
                </CloseButton>
            </MuiDialogTitle>
            <MuiDialogContent>
                <MuiTypography>
                    Lorem Ipsum е елементарен примерен текст, използван в печатарската и типографската индустрия. Lorem Ipsum е индустриален стандарт от около 1500 година, когато неизвестен печатар взема няколко печатарски букви и ги разбърква, за да напечата с тях книга с примерни шрифтове. Този начин не само е оцелял повече от 5 века, но е навлязъл и в публикуването на електронни издания като е запазен почти без промяна.
                </MuiTypography>
            </MuiDialogContent>
            <MuiDialogActions>
                <MuiButton
                    variant="contained"
                    onClick={handleClose}
                >
                    Запази промените
                </MuiButton>
            </MuiDialogActions>
        </MuiDialog>
    </MuiBox>
}

export const Default = Template.bind({})
Default.args = {
    disableEscapeKeyDown: false,
    fullScreen: false,
    fullWidth: true,
    maxWidth: "sm",
    scroll: "body",
    transitionDuration: 200,
}