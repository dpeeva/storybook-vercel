import { styled } from "@mui/material"
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled"
import { Button } from "../Button/Button"

export const IconButton = styled(Button)(({ theme, size }) => ({
    paddingTop: "5px",
    paddingBottom: "5px",

    ...(size === "small" && {
        minWidth: "34px",
        paddingLeft: "6px",
        paddingRight: "6px",
        [".MuiSvgIcon-root"]: {
            fontSize: "20px",
        },
    }),

    ...(size === "medium" && {
        minWidth: "40px",
        paddingLeft: "5px",
        paddingRight: "5px",
        [".MuiSvgIcon-root"]: {
            fontSize: "24px",
        },
    }),

    ...(size === "large" && {
        minWidth: "46px",
        padding: "3px 5px",
        [".MuiSvgIcon-root"]: {
            fontSize: "32px",
        },
    }),

    [`&.${buttonUnstyledClasses.disabled}`]: {
        pointerEvents: "none",
    },
}))