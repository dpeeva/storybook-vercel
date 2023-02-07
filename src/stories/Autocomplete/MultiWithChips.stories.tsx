import type { Meta, StoryFn } from "@storybook/react"
import { mui, muiIcons } from "../../mui"
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
            onChange={() => { }} // Callback fired when item is selected.
            onOpen={() => { }} // Callback fired when the component requests to be opened.
            onClose={() => { }} // Callback fired when the component requests to be closed.
            getOptionLabel={(option: any) => option.name}
            clearIcon={<muiIcons.Close />}
            componentsProps={{
                clearIndicator: { size: "small" }
            }}
            renderOption={(props, option: any) => (
                <mui.MenuItem {...props}>
                    {option.name}
                </mui.MenuItem>
            )}
            renderInput={(params) =>
                <mui.TextField
                    {...params}
                    variant={variant}
                    label={label}
                    placeholder={placeholder}
                />
            }
            renderTags={(value: readonly any[], getTagProps) => (
                value.map((option: any, i: number) => (
                    <mui.Chip
                        variant="outlined"
                        label={option.name}
                        size="small"
                        {...getTagProps({ index: i })}
                    />)
                )
            )}
        />
    </mui.Box>
)

export const MultiWithChips = Template.bind({})
MultiWithChips.args = {
    color: "primary",
    size: "small",
    multiple: true,
    freeSolo: false,
    limitTags: 3,
    disablePortal: true,
    disableClearable: false,
    loading: false,
    loadingText: "Loading...",
    disabled: false,
}