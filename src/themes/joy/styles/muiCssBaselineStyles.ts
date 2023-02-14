import { Components } from "@mui/material"
import { MuiTheme } from "../../../typings"

export const muiCssBaselineStyles: Components<{ theme: MuiTheme }>["MuiCssBaseline"] = {
    styleOverrides: (({ theme }) => ({
        h1: {
            margin: "12px 0",
        },
        h2: {
            margin: "12px 0",
        },
        h3: {
            margin: "12px 0",
        },
        h4: {
            margin: "8px 0",
        },
        h5: {
            margin: "8px 0",
        },
        h6: {
            margin: "8px 0",
        },
        p: {
            margin: "8px 0",
        }
    }))
}