import { styled } from "@mui/material"
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled"
import { Button } from "../Button/Button"

export const IconButton = styled(Button)(({ theme, size }) => ({
    paddingTop: "5px",
    paddingBottom: "5px",

    ...(size === "small" && {
        minWidth: "30px",
        paddingLeft: "5px",
        paddingRight: "5px",
        [".MuiSvgIcon-root"]: {
            fontSize: "18px",
        },
    }),

    ...(size === "medium" && {
        minWidth: "36px",
        paddingLeft: "5px",
        paddingRight: "5px",
        [".MuiSvgIcon-root"]: {
            fontSize: "22px",
        },
    }),

    ...(size === "large" && {
        minWidth: "42px",
        padding: "3px 4px",
        [".MuiSvgIcon-root"]: {
            fontSize: "30px",
        },
    }),

    [`&.${buttonUnstyledClasses.disabled}`]: {
        pointerEvents: "none",
    },
}))