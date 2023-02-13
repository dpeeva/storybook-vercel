import type { Meta, StoryFn } from "@storybook/react"
import { SelectProps } from "@mui/material"
import { MuiBox, MuiMenuItem, MuiSelect } from "../../../mui"
import { items } from "."
import { argTypes } from "./argTypes"

export default {
    title: "Base/Select",
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
    <MuiBox sx={{ width: "200px" }}>
        <MuiSelect
            {...args}
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
    </MuiBox>
)

export const Default = Template.bind({})
Default.args = {
    variant: "outlined",
    color: "primary",
    size: "small",
    label: "", // Needed to hold enough background space for Label on top of border
    disabled: false,
}