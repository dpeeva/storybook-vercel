import type { Meta, StoryFn } from "@storybook/react"
import { FormControlProps, SelectProps } from "@mui/material"
import { MuiBox, MuiFormControl, MuiInputLabel, MuiMenuItem, MuiSelect } from "../../../mui"
import { items } from "."
import { argTypes } from "./argTypes"

export default {
    title: "Base/Collection/FormControl",
    component: MuiFormControl,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
        // Additional props:
        label: {
            control: { type: "text" },
        },
    },
} as Meta

type Props = FormControlProps & {
    label: SelectProps["label"]
}

const MenuProps = {
    MenuListProps: {
        sx: { maxHeight: "150px" }
    }
}

const InputProps = {
    placeholder: "Placeholder",
}

const Template: StoryFn = ({
    variant,
    size,
    error,
    disabled,
    label
}) => (
    <MuiBox sx={{ width: "200px" }}>
        <MuiFormControl
            {...{ variant, size, error, disabled, label }}
            fullWidth
        >
            <MuiInputLabel>{label}</MuiInputLabel>
            <MuiSelect
                variant={variant}
                MenuProps={MenuProps}
                inputProps={InputProps}
                label={label}
            >
                {items.map((item, i) => (
                    <MuiMenuItem
                        key={`${i}-${item.value}`}
                        value={item.value}
                    >{item.text}</MuiMenuItem>
                ))}
            </MuiSelect>
        </MuiFormControl>
    </MuiBox>
)

export const WithLabelAndSelect = Template.bind({})
WithLabelAndSelect.args = {
    variant: "outlined",
    size: "small",
    error: false,
    disabled: false,
    label: "Имейл",
}