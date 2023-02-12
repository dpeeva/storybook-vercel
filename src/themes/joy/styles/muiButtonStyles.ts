import { Components } from "@mui/material"
import { buttonClasses } from "@mui/material/Button"
import { MuiTheme } from "../../../typings"

export const muiButtonStyles: Components<MuiTheme>["MuiButton"] = {
    variants: [
        {
            props: { size: "small" },
            style: {
                borderRadius: "17px",
                paddingLeft: "14px",
                paddingRight: "14px",
                // fontSize: "13px",
                [`.${buttonClasses.startIcon}`]: {
                    marginLeft: "-7px",
                    marginRight: "6px",
                },
                [`.${buttonClasses.endIcon}`]: {
                    marginLeft: "6px",
                    marginRight: "-7px",
                },
            }
        },
        {
            props: { size: "medium" },
            style: {
                borderRadius: "20px",
                paddingLeft: "20px",
                paddingRight: "20px",
                // fontSize: "14px",
                [`.${buttonClasses.startIcon}`]: {
                    marginLeft: "-10px",
                    marginRight: "9px",
                },
                [`.${buttonClasses.endIcon}`]: {
                    marginLeft: "9px",
                    marginRight: "-10px",
                },
            }
        },
        {
            props: { size: "large" },
            style: {
                borderRadius: "23px",
                paddingLeft: "24px",
                paddingRight: "24px",
                // fontSize: "15px",
                [`.${buttonClasses.startIcon}`]: {
                    marginLeft: "-12px",
                    marginRight: "10px",
                },
                [`.${buttonClasses.endIcon}`]: {
                    marginLeft: "10px",
                    marginRight: "-12px",
                },
            }
        },
    ],
    styleOverrides: {
        root: ({ theme }) => ({
            boxShadow: "none",
            ["&:hover, &:active"]: {
                boxShadow: "none",
            },
        })
    },
}