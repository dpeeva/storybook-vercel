import * as React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { SelectProps } from "@mui/material"
import { MuiFormControl, MuiInputLabel, MuiMenuItem, MuiSelect } from "../../../mui"
import { items } from "../Select"
import { argTypes } from "./argTypes"

export default {
    title: "Base/MultiSelect",
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

const Template: StoryFn = (args: Props) => {
    const [personAge, setPersonAge] = React.useState([])

    const handleChange = (event: any) => {
        const {
            target: { value },
        } = event
        setPersonAge(
            // On autofill we get a stringified value.
            typeof value === "string" ? value.split(",") : value,
        )
    }

    return <MuiFormControl
        variant={args.variant} // Needed for proper position of Label
        size={args.size} // Needed for proper position of Label inside input
        sx={{ width: "200px" }}
    >
        <MuiInputLabel id="label-id">{args.label}</MuiInputLabel>
        <MuiSelect
            {...args}
            labelId="label-id"
            label={"Имейл"} // Needed to hold enough background space for Label on top of border
            MenuProps={MenuProps}
            inputProps={InputProps}
            fullWidth
            value={personAge}
            onChange={handleChange}
        >
            {items.map((item, i) => (
                <MuiMenuItem
                    key={`${i}-${item.value}`}
                    value={item.value}
                >{item.text}</MuiMenuItem>
            ))}
        </MuiSelect>
    </MuiFormControl>
}

export const WithLabel = Template.bind({})
WithLabel.args = {
    variant: "outlined",
    color: "primary", // defaults to primary when not set
    size: "small",
    multiple: true,
    label: "Имейл",
    disabled: false,
}