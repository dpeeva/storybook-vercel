import type { Meta, StoryFn } from "@storybook/react"
import { mui } from "../../mui"
import { items } from "."
import { argTypes } from "./argTypes"

export default {
    title: "Autocomplete",
    component: mui.Autocomplete,
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

type Props = mui.AutocompleteProps<unknown, boolean, boolean, boolean, "div"> & {
    variant: mui.TextFieldProps["variant"]
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
    <mui.Box sx={{ width: "200px" }}>
        <mui.Autocomplete
            {...{ color, size, multiple, freeSolo, limitTags, disablePortal, disableClearable, loading, loadingText, disabled }}
            fullWidth
            options={items}
            onChange={() => { }}
            getOptionLabel={(option: any) => option.name}
            renderOption={(props, option: any) => (
                <mui.MenuItem {...props} key={option.id}>
                    {option.name}
                </mui.MenuItem>
            )}
            renderInput={(params) =>
                <mui.TextField
                    color={color as mui.TextFieldProps["color"]}
                    {...params}
                    variant={variant}
                    label={label}
                    placeholder={placeholder}
                />
            }
        />
    </mui.Box>
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