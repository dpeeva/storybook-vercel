import type { Meta, StoryFn } from "@storybook/react"
import { MuiAutocomplete, MuiBox, MuiMenuItem, MuiTextField } from "../../../mui"
import { items } from "."
import { argTypes } from "./argTypes"
import { AutocompleteProps, TextFieldProps } from "@mui/material"

export default {
    title: "Base/Autocomplete",
    component: MuiAutocomplete,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
        // Additional props;
        variant: {
            options: ["standard", "outlined", "filled"],
            control: { type: "radio" },
        },
        label: {
            control: { type: "text" },
            defaultValue: "Label",
        },
        placeholder: {
            control: { type: "text" },
            defaultValue: "Please select",
        },
    },
} as Meta

type Props = AutocompleteProps<unknown, boolean, boolean, boolean, "div"> & {
    variant: TextFieldProps["variant"]
    label: string
    placeholder: string
}

const Template: StoryFn = ({
    color,
    size,
    multiple,
    freeSolo,
    limitTags,
    disablePortal,
    disableClearable,
    loading,
    loadingText,
    disabled,
    variant,
    label,
    placeholder
}) => (
    <MuiBox sx={{ width: "200px" }}>
        <MuiAutocomplete
            {...{ color, size, multiple, freeSolo, limitTags, disablePortal, disableClearable, loading, loadingText, disabled }}
            fullWidth
            options={items}
            onChange={() => { }}
            getOptionLabel={(option: any) => option.name}
            renderOption={(props, option: any) => (
                <MuiMenuItem {...props} key={option.id}>
                    {option.name}
                </MuiMenuItem>
            )}
            renderInput={(params) =>
                <MuiTextField
                    color={color as TextFieldProps["color"]}
                    {...params}
                    variant={variant}
                    label={label}
                    placeholder={placeholder}
                />
            }
        />
    </MuiBox>
)

export const Default = Template.bind({})
Default.args = {
    color: "primary",
    size: "small",
    multiple: false,
    freeSolo: false,
    limitTags: 3,
    disablePortal: true,
    disableClearable: false,
    loading: false,
    loadingText: "Loading...",
    disabled: false,
}