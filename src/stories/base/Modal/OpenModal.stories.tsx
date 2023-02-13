import * as React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { ModalProps, styled } from "@mui/material"
import { MuiButton, MuiDialogActions, MuiDialogContent, MuiDialogTitle, MuiModal, MuiPaper, MuiTypography } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Modal",
    component: MuiModal,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
        open: {
            control: { type: "boolean" },
        },
    },
} as Meta

const ModalContent = styled(MuiDialogContent)({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
})

const ModalPaper = styled(MuiPaper)({
    padding: "20px",
})

type Props = ModalProps & {
}

const Template: StoryFn = (args) => (
    <MuiModal
        {...args}
    >
        <ModalContent>
            <ModalPaper elevation={24}>
                <MuiDialogTitle>
                    <MuiTypography variant="h6" component="h2">
                        Текст в модален прозорец
                    </MuiTypography>
                </MuiDialogTitle>
                <MuiDialogContent>
                    <MuiTypography sx={{ mt: 2 }}>
                        Lorem Ipsum е елементарен примерен текст, използван в печатарската и типографската индустрия. Lorem Ipsum е индустриален стандарт от около 1500 година, когато неизвестен печатар взема няколко печатарски букви и ги разбърква, за да напечата с тях книга с примерни шрифтове. Този начин не само е оцелял повече от 5 века, но е навлязъл и в публикуването на електронни издания като е запазен почти без промяна.
                    </MuiTypography>
                </MuiDialogContent>
                <MuiDialogActions>
                    <MuiButton variant="contained">
                        Запази промените
                    </MuiButton>
                </MuiDialogActions>
            </ModalPaper>
        </ModalContent>
    </MuiModal>
)

export const Open = Template.bind({})
Open.args = {
    open: true,
}