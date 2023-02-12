import { Components } from "@mui/material"
// import { buttonGroupClasses } from "@mui/material/ButtonGroup"
import { MuiTheme } from "../../../typings"

export const muiButtonGroupStyles: Components<MuiTheme>["MuiButtonGroup"] = {
    variants: [
        {
            props: { size: "small" },
            style: {
                borderRadius: "17px",
            }
        },
        {
            props: { size: "medium" },
            style: {
                borderRadius: "20px",
            }
        },
        {
            props: { size: "large" },
            style: {
                borderRadius: "23px",
            }
        },
    ],
    styleOverrides: {
        root: {
            boxShadow: "none",
        }
    }
}