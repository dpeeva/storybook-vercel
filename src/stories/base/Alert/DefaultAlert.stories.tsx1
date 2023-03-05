import type { Meta, StoryFn } from "@storybook/react"
import { AlertProps } from "@mui/material"
import { MuiAlert, MuiAlertTitle } from "../../../mui"
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
        sx={{ width: "400px" }}
    >
        {title && <MuiAlertTitle>{title}</MuiAlertTitle>}
        {content}
    </MuiAlert>
)

export const Default = Template.bind({})
Default.args = {
    variant: "filled",
    severity: "error",
    elevation: 0, // Zero by default, no need to set it explicitly
    title: undefined,
    content: "Lorem Ipsum е елементарен примерен текст, използван в печатарската и типографската индустрия. Lorem Ipsum е индустриален стандарт от около 1500 година, когато неизвестен печатар взема няколко печатарски букви и ги разбърква, за да напечата с тях книга с примерни шрифтове.",
}