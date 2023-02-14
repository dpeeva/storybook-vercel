import * as React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { SelectChangeEvent, SelectProps } from "@mui/material"
import { MuiBox, MuiMenuItem, MuiSelect } from "../../../mui"
import { ComplexItem, complexItems, ComplexValue } from "."
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

const Template: StoryFn = (args: Props) => {
    const [age, setAge] = React.useState(10)

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as any)
    }

    return <MuiBox sx={{ width: "250px" }}>
        <MuiSelect
            {...args}
            MenuProps={MenuProps}
            inputProps={InputProps}
            onChange={handleChange} // Callback fired when a menu item is selected.
            onOpen={() => { }} // Callback fired when the component requests to be opened.
            onClose={() => { }} // Callback fired when the component requests to be closed.
            value={age}
            renderValue={(value: ComplexValue) => value.count}
            fullWidth
        >
            {complexItems.map((item: ComplexItem, i) => (
                <MuiMenuItem
                    key={`${i}-${item.value}`}
                    value={item.value as any}
                >{item.text}</MuiMenuItem>
            ))}
        </MuiSelect>
    </MuiBox>
}

export const WithComplexValues = Template.bind({})
WithComplexValues.args = {
    variant: "outlined",
    color: "primary",
    size: "medium",
    label: "", // Needed to hold enough background space for Label on top of border
    disabled: false,
}