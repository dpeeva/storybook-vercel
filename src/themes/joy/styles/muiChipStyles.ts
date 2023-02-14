import { Components } from "@mui/material"
import { MuiTheme } from "../../../typings"

export const muiChipStyles: Components<MuiTheme>["MuiChip"] = {
    variants: [
        {
            props: { size: "small" },
            style: {
                height: "22px",
                fontSize: "12px",
            }
        },
        {
            props: { size: "medium" },
            style: {}
        },
    ],
}