import { Components } from "@mui/material"
// import { autocompleteClasses } from "@mui/material/Autocomplete"
import { MuiTheme } from "../../../typings"

export const muiAutocompleteStyles: Components<MuiTheme>["MuiAutocomplete"] = {
    styleOverrides: {
        endAdornment: {
        },
        popper: ({ ownerState, theme }) => ({
        }),
    }
}