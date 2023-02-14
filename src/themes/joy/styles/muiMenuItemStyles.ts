import { Components } from "@mui/material"
import { MuiTheme } from "../../../typings"

export const muiMenuItemStyles: Components<MuiTheme>["MuiMenuItem"] = {
    styleOverrides: {
        root: ({ theme, size }) => ({
            ...(size === "small" && {
                fontSize: "14px",
            }),
            minHeight: "36px",
        })
    }
}