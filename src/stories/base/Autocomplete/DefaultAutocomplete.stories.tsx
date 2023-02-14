import type { Meta, StoryFn } from "@storybook/react"
import { MuiAutocomplete, MuiBox, MuiMenuItem, MuiTextField } from "../../../mui"
import { items } from "."
import { argTypes } from "./argTypes"
import { AutocompleteProps, TextFieldProps } from "@mui/material"

export default {
    title: "Base/Collection/Autocomplete",
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
        },
        placeholder: {
            control: { type: "text" },
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
    <MuiBox sx={{ width: "250px" }}>
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
                    color={color}
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
    size: "medium",
    multiple: false,
    freeSolo: false,
    limitTags: 3,
    disablePortal: true,
    disableClearable: false,
    loading: false,
    loadingText: "Loading...",
    disabled: false,
    label: "Имейл",
    placeholder: "Моля, изберете",
}