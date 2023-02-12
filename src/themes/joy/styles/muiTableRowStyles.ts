import { Components } from "@mui/material"
import { MuiTheme } from "../../../typings"

export const muiTableRowStyles: Components<MuiTheme>["MuiTableRow"] = {
    styleOverrides: {
        root: ({ theme }) => ({
        }),
        head: ({ theme }) => ({
        }),
        footer: ({ theme }) => ({
        })
    }
}