import type { Meta, StoryFn } from "@storybook/react"
import { MuiAutocomplete, MuiBox, MuiMenuItem, MuiTextField } from "../../../mui"
import { argTypes } from "./argTypes"
import {
    AutocompleteProps,
    // CreateFilterOptionsConfig,
    TextFieldProps
} from "@mui/material"
// import { createFilterOptions } from "@mui/material/Autocomplete"
import { sortTeams } from "./sortTeams"
import { data as teams } from "./teams"
import { Team } from "./types"

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
    // ignoreAccents: CreateFilterOptionsConfig<Team>["ignoreAccents"]
    // matchFrom: CreateFilterOptionsConfig<Team>["matchFrom"]
    // ignoreCase: CreateFilterOptionsConfig<Team>["ignoreCase"]
    // trim: CreateFilterOptionsConfig<Team>["trim"]
    // limit: CreateFilterOptionsConfig<Team>["limit"]
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
    placeholder,
    // ignoreAccents,
    // matchFrom,
    // ignoreCase,
    // trim,
    // limit
}) => {
    // const filterOptions = createFilterOptions({
    //     ignoreAccents,
    //     matchFrom,
    //     ignoreCase,
    //     trim,
    //     limit,
    //     stringify: (option: Team) => option.name
    // })

    const filterOptions = (
        options: Team[],
        { inputValue }: { inputValue: string }
    ) => sortTeams(options, inputValue)

    return <MuiBox sx={{ width: "250px" }}>
        <MuiAutocomplete
            {...{ color, size, multiple, freeSolo, limitTags, disablePortal, disableClearable, loading, loadingText, disabled }}
            fullWidth
            options={teams}
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
            filterOptions={filterOptions}
            disableListWrap
        />
    </MuiBox>
}

export const WithCustomFilter = Template.bind({})
WithCustomFilter.args = {
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
    // ignoreAccents: false,
    // matchFrom: "start",
    // ignoreCase: true,
    // trim: true,
    // limit: 100,
}