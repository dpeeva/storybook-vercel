import * as React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { SelectProps } from "@mui/material"
import { MuiMenuItem, MuiSelect } from "../../../mui"
import { items } from "../Select"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Collection/MultiSelect",
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
            typeof value === "string" ? value.split(",") : value
        )
    }

    return <MuiSelect
        {...args}
        MenuProps={MenuProps}
        inputProps={InputProps}
        fullWidth
        value={personAge}
        onChange={handleChange}
        sx={{ width: "250px" }}
    >
        {items.map((item, i) => (
            <MuiMenuItem
                key={`${i}-${item.value}`}
                value={item.value}
            >{item.text}</MuiMenuItem>
        ))}
    </MuiSelect>
}

export const Default = Template.bind({})
Default.args = {
    variant: "outlined",
    color: "primary", // defaults to primary when not set
    multiple: true,
    size: "medium",
    disabled: false,
}