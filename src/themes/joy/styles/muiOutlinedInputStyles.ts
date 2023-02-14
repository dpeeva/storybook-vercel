import { Components } from "@mui/material"
import { MuiTheme } from "../../../typings"

export const muiOutlinedInputStyles: Components<MuiTheme>["MuiOutlinedInput"] = {
    variants: [
        {
            props: { size: "small" },
            style: {
                fontSize: "14px",
                minHeight: "36px",
            }
        },
    ],
}