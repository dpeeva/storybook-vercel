import { Components } from "@mui/material"
import { MuiTheme } from "../../../typings"

export const muiAlertTitleStyles: Components<MuiTheme>["MuiAlertTitle"] = {
    styleOverrides: {
        root: ({ theme }) => ({
            color: `${theme.palette.common.white}`,
        })
    }
}