import type { Meta, StoryFn } from "@storybook/react"
import { TextFieldProps } from "@mui/material"
import { MuiBox, MuiMenuItem, MuiTextField } from "../../../mui"
import { items } from "."
import { argTypes } from "./argTypes"

export default {
    title: "Base/TextField",
    component: MuiTextField,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
    },
} as Meta

type Props = TextFieldProps & {
}

const Template: StoryFn = (args: Props) => (
    <MuiBox sx={{ width: "200px" }}>
        <MuiTextField
            {...args}
            select
            onChange={() => { }}
        >
            {items.map((item, i) => (
                <MuiMenuItem
                    key={i}
                    value={item.value}
                >{item.text}</MuiMenuItem>
            ))}
        </MuiTextField>
    </MuiBox>
)

export const TypeSelect = Template.bind({})
TypeSelect.args = {
    variant: "outlined", // defaults to outlined when not set
    color: "primary", // defaults to primary when not set
    size: "small",
    label: "Имейл",
    placeholder: "Въведете текст",
    helperText: "Помощен текст",
    fullWidth: true,
    multiline: false,
    required: false,
    error: false,
    disabled: false,
}