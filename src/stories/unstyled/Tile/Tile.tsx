import { BaseColor, ThemeName, themes } from "../../../typings"
import { Box, styled } from "@mui/material"
import { BoxProps } from "@mui/system"


export interface Props extends BoxProps {
    mode?: ThemeName
    color?: BaseColor
}

export const Tile = styled(Box)<Props>(({
    mode = "joy",
    color = "primary"
}) => ({
    fontFamily: ["Kometa", "Montserrat", "sans-serif"].join(", "),
    padding: "20px",
    backgroundColor: themes[mode].palette[color].main,
    color: themes[mode].palette.common.white,
    maxWidth: "200px",
}))