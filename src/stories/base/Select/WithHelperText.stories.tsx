import * as React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { SelectProps } from "@mui/material"
import { MuiFormControl, MuiFormHelperText, MuiInputLabel, MuiMenuItem, MuiSelect } from "../../../mui"
import { items } from "."
import { argTypes } from "./argTypes"

export default {
    title: "Base/Collection/Select",
    component: MuiSelect,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
        // Additional props:
        helperText: {
            control: { type: "text" },
        },
    },
} as Meta

type Props = SelectProps & {
    helperText: string
}

const MenuProps = {
    MenuListProps: {
        sx: { maxHeight: "150px" }
    }
}

const InputProps = {
    "aria-label": "Label",
    // Placeholder not supported for Select
}

const Template: StoryFn = ({
    variant,
    color,
    size,
    label,
    disabled,
    helperText
}) => (
    <MuiFormControl
        variant={variant} // Needed for proper position of Label
        size={size} // Needed for proper position of Label inside input
        sx={{ width: "250px" }}
    >
        <MuiInputLabel id={"label-id"}>{label}</MuiInputLabel>
        <MuiSelect
            {...{ variant, color, size, label, disabled }}
            labelId={"label-id"}
            MenuProps={MenuProps}
            inputProps={InputProps}
            onChange={() => { }} // Callback fired when a menu item is selected.
            onOpen={() => { }} // Callback fired when the component requests to be opened.
            onClose={() => { }} // Callback fired when the component requests to be closed.
            fullWidth
        >
            {items.map((item, i) => (
                <MuiMenuItem
                    key={`${i}-${item.value}`}
                    value={item.value}
                >{item.text}</MuiMenuItem>
            ))}
        </MuiSelect>
        <MuiFormHelperText>{helperText}</MuiFormHelperText>
    </MuiFormControl>
)

export const WithHelperText = Template.bind({})
WithHelperText.args = {
    variant: "outlined",
    color: "primary",
    size: "medium",
    label: "Имейл", // Needed to hold enough background space for Label on top of border
    disabled: false,
    helperText: "Моля, въведете имейл",
}