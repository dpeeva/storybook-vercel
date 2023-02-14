import { Components, outlinedInputClasses } from "@mui/material"
import { MuiTheme } from "../../../typings"

export const muiInputBaseStyles: Components<MuiTheme>["MuiInputBase"] = {
    variants: [
        {
            props: { size: "small" },
            style: {
                [`.${outlinedInputClasses.input}`]: {
                    paddingTop: "6.5px", // "7.5px",
                    paddingBottom: "6.5px", // "7.5px",
                    fontSize: "14px",
                }
            }
        },
        {
            props: { size: "medium" },
            style: {
                [`.${outlinedInputClasses.input}`]: {
                    paddingTop: "10.5px", // "9.5px",
                    paddingBottom: "8.5px", // "9.5px",
                }
            }
        }
    ],
}