import type { Meta, StoryFn } from "@storybook/react"
import { SelectProps } from "@mui/material"
import { MuiBox, MuiSelect } from "../../../mui"
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
        native: {
            control: { type: "boolean" },
            table: { disable: true },
        },
    },
} as Meta

type Props = SelectProps & {
}

const InputProps = {
    "aria-label": "Label",
}

const Template: StoryFn = (args: Props) => (
    <MuiBox sx={{ width: "250px" }}>
        <MuiSelect
            {...args}
            inputProps={InputProps}
            fullWidth
        >
            {items.map((item, i) => (
                <option
                    key={`${i}-${item.value}`}
                    value={item.value}
                >{item.text}</option>
            ))}
        </MuiSelect>
    </MuiBox>
)

export const Native = Template.bind({})
Native.args = {
    variant: "outlined",
    color: "secondary",
    size: "medium",
    label: "", // Needed to hold enough background space for Label on top of border
    native: true,
    disabled: false,
}