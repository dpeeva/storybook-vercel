import { ThemeName, themes } from "../../../typings"
import { Box, styled } from "@mui/material"
import { BoxProps } from "@mui/system"


export interface Props extends BoxProps {
    mode?: ThemeName
    bgcolor?: string
    color?: string
}

export const Tile = styled(Box)<Props>(({
    mode = "joy",
    bgcolor = "#000",
    color = "#fff"
}) => ({
    fontFamily: ["Kometa", "Montserrat", "sans-serif"].join(", "),
    padding: "10px 20px",
    borderTop: `1px solid ${themes[mode].palette.grey[200]}`,
    borderBottom: `1px solid ${themes[mode].palette.grey[200]}`,
    backgroundColor: bgcolor,
    color: color,
    minWidth: "200px",
    maxWidth: "33%",
}))