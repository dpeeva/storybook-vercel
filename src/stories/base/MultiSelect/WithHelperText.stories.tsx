import * as React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { SelectProps } from "@mui/material"
import { MuiFormControl, MuiFormHelperText, MuiInputLabel, MuiMenuItem, MuiSelect } from "../../../mui"
import { items } from "../Select"
import { argTypes } from "./argTypes"

export default {
    component: MuiSelect,
    title: "Base/Collection/MultiSelect",
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
    // Placeholder not supported for Select
}

const Template: StoryFn = ({
    variant,
    color,
    size,
    multiple,
    label,
    disabled,
    helperText
}) => {
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
        variant={variant} // Needed for proper position of Label
        size={size} // Needed for proper position of Label inside input
        sx={{ width: "200px" }}
    >
        <MuiInputLabel id="label-id">{label}</MuiInputLabel>
        <MuiSelect
            {...{
                variant,
                color,
                size,
                multiple,
                label, // Needed to hold enough background space for Label on top of border
                disabled,
            }}
            labelId="label-id"
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
        <MuiFormHelperText>{helperText}</MuiFormHelperText>
    </MuiFormControl>
}

export const WithHelperText = Template.bind({})
WithHelperText.args = {
    variant: "outlined",
    color: "primary", // defaults to primary when not set
    size: "small",
    multiple: true,
    label: "Имейл",
    disabled: false,
    helperText: "Помощен текст",
}