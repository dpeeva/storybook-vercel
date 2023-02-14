import type { Meta, StoryFn } from "@storybook/react"
import { SelectProps } from "@mui/material"
import { MuiBox, MuiMenuItem, MuiSelect } from "../../../mui"
import { itemsLong, LongTextSingleLine } from "."
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
    <MuiBox sx={{ width: "250px" }}>
        <MuiSelect
            {...args}
            MenuProps={MenuProps}
            inputProps={InputProps}
            onChange={() => { }} // Callback fired when a menu item is selected.
            onOpen={() => { }} // Callback fired when the component requests to be opened.
            onClose={() => { }} // Callback fired when the component requests to be closed.
            fullWidth
        >
            {itemsLong.map((item, i) => (
                <MuiMenuItem
                    key={`${i}-${item.value}`}
                    value={item.value}
                    sx={{ maxWidth: "250px" }}
                >
                    <LongTextSingleLine>{item.text}</LongTextSingleLine>
                </MuiMenuItem>
            ))}
        </MuiSelect>
    </MuiBox>
)

export const WithLongTextSingleLine = Template.bind({})
WithLongTextSingleLine.args = {
    variant: "outlined",
    color: "primary",
    size: "medium",
    label: "", // Needed to hold enough background space for Label on top of border
    disabled: false,
}