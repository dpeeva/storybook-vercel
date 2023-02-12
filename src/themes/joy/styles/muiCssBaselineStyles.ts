import { Components } from "@mui/material"
import { MuiTheme } from "../../../typings"

export const muiCssBaselineStyles: Components<{ theme: MuiTheme }>["MuiCssBaseline"] = {
    styleOverrides: (({ theme }) => ({
        //
    }))
}