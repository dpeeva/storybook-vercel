import { Components } from "@mui/material"
import { MuiTheme } from "../../../typings"

export const muiFormLabelStyles: Components<MuiTheme>["MuiFormLabel"] = {
    styleOverrides: {
        root: {
            paddingBottom: "2px",
            lineHeight: 1,
            fontSize: "14px",
        }
    }
}