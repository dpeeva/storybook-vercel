import * as React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { RemoveRedEye } from "@mui/icons-material"
import { OutlinedInputProps } from "@mui/material"
import { MuiBox, MuiInputAdornment, MuiOutlinedInput } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/OutlinedInput",
    component: MuiOutlinedInput,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
    },
} as Meta

type Props = OutlinedInputProps & {
}

const Template: StoryFn = (args: Props) => {
    const [val, setValue] = React.useState("250")
    return <MuiBox
        sx={{ width: "100px" }}
    >
        <MuiOutlinedInput
            {...args}
            inputProps={{ "aria-label": "Имейл" }}
            startAdornment={
                <MuiInputAdornment position={"start"}>
                    <RemoveRedEye fontSize="small" />
                </MuiInputAdornment>
            }
            onChange={(newValue) => setValue(newValue.target.value)}
            value={val}
        />
    </MuiBox>
}

export const WithStartAdornment = Template.bind({})
WithStartAdornment.args = {
    color: "primary", // defaults to primary when not set
    size: "small",
    placeholder: "Placeholder",
    fullWidth: true,
    multiline: false,
    required: false,
    error: false,
    disabled: false,
}