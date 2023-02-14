import * as React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { SelectProps } from "@mui/material"
import { MuiFormControl, MuiInputLabel, MuiMenuItem, MuiSelect } from "../../../mui"
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
    },
} as Meta

type Props = SelectProps & {
}

const MenuProps = {
    MenuListProps: {
        sx: { maxHeight: "150px" }
    }
}

const InputProps = {
    // Placeholder not supported for Select
}

const Template: StoryFn = (args: Props) => (
    <MuiFormControl
        variant={args.variant} // Needed for proper position of Label
        size={args.size} // Needed for proper position of Label inside input
        sx={{ width: "250px" }}
    >
        <MuiInputLabel id={"label-id"}>{args.label}</MuiInputLabel>
        <MuiSelect
            {...args}
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
    </MuiFormControl>
)

export const WithLabel = Template.bind({})
WithLabel.args = {
    variant: "outlined",
    color: "primary",
    size: "medium",
    label: "Имейл", // Needed to hold enough background space for Label on top of border
    disabled: false,
}