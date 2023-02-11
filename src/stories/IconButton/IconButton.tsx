import { styled } from "@mui/material"
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled"
import { Button } from "../Button/Button"

export const IconButton = styled(Button)(({ theme }) => ({
    padding: "5px 6px",
    minWidth: "34px",
    [`&.${buttonUnstyledClasses.disabled}`]: {
        pointerEvents: "none",
    },
}))