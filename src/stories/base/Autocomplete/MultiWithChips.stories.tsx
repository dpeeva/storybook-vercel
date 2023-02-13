import type { Meta, StoryFn } from "@storybook/react"
import { Close } from "@mui/icons-material"
import { AutocompleteProps, TextFieldProps } from "@mui/material"
import { MuiAutocomplete, MuiBox, MuiChip, MuiMenuItem, MuiTextField } from "../../../mui"
import { items } from "."
import { argTypes } from "./argTypes"

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
    <MuiBox sx={{ width: "200px" }}>
        <MuiAutocomplete
            {...{ color, size, multiple, freeSolo, limitTags, disablePortal, disableClearable, loading, loadingText, disabled }}
            fullWidth
            options={items}
            onChange={() => { }} // Callback fired when item is selected.
            onOpen={() => { }} // Callback fired when the component requests to be opened.
            onClose={() => { }} // Callback fired when the component requests to be closed.
            getOptionLabel={(option: any) => option.name}
            clearIcon={<Close />}
            componentsProps={{
                clearIndicator: { size: "small" }
            }}
            renderOption={(props, option: any) => (
                <MuiMenuItem {...props}>
                    {option.name}
                </MuiMenuItem>
            )}
            renderInput={(params) =>
                <MuiTextField
                    {...params}
                    variant={variant}
                    label={label}
                    placeholder={placeholder}
                />
            }
            renderTags={(value: readonly any[], getTagProps) => (
                value.map((option: any, i: number) => (
                    <MuiChip
                        variant="outlined"
                        label={option.name}
                        size="small"
                        {...getTagProps({ index: i })}
                    />)
                )
            )}
        />
    </MuiBox>
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
    label: "Имейл",
    placeholder: "Моля, изберете",
}