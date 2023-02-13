import { Components } from "@mui/material"
import { MuiTheme } from "../../../typings"

export const muiSnackbarContentStyles: Components<MuiTheme>["MuiSnackbarContent"] = {
    styleOverrides: {
        root: {
            padding: "16px",
        },
        action: {
            padding: "0 8px",
        }
    }
}