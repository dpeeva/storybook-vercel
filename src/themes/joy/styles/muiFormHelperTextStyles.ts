import { Components, formHelperTextClasses } from "@mui/material"
import { MuiTheme } from "../../../typings"

export const muiFormHelperTextStyles: Components<MuiTheme>["MuiFormHelperText"] = {
    styleOverrides: {
        root: {
            marginTop: "4px",
            [`&.${formHelperTextClasses.root}`]: {
                fontSize: "12px",
            }
        }
    },
}