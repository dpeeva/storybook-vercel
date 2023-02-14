import type { Meta, StoryFn } from "@storybook/react"
import { FormControlLabelProps, SwitchProps } from "@mui/material"
import { MuiFormControlLabel, MuiSwitch } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Collection/Switch",
    component: MuiSwitch,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
        // Additional props:
        label: {
            control: { type: "text" },
        },
        labelPlacement: {
            options: ["top", "bottom", "start", "end"],
            control: { type: "radio" },
        },
    },
} as Meta

type Props = SwitchProps & {
    label: string
    labelPlacement: FormControlLabelProps["labelPlacement"]
}

const Template: StoryFn = ({
    color,
    size,
    defaultChecked,
    disabled,
    label,
    labelPlacement
}) => (
    <MuiFormControlLabel
        control={
            <MuiSwitch
                {...{ color, size, defaultChecked, disabled }}
            />
        }
        label={label}
        labelPlacement={labelPlacement}
    />
)

export const WithLabel = Template.bind({})
WithLabel.args = {
    color: "primary", // defaults to primary when not set
    size: "medium",
    defaultChecked: true,
    disabled: false,
    label: "Имейл",
    labelPlacement: "end",
}