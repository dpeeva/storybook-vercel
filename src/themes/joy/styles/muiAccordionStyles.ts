import { alpha, Components } from "@mui/material"
import { MuiTheme } from "../../../typings"

export const muiAccordionStyles: Components<MuiTheme>["MuiAccordion"] = {
    styleOverrides: {
        root: ({ theme }) => ({
            boxShadow: "none",
            border: `1px solid ${alpha(theme.palette.info.light, 0.25)}`,
        })
    }
}