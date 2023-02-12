import React from "react"
import { Box, styled, Typography } from "@mui/material"
import { ThemeName, themes } from "../../../typings"
import { colors } from "./colors"
import { Tile } from "./Tile"

const Wrapper = styled(Box)({
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    [".tile"]: {
        margin: "5px",
        width: "25%"
    },
})

const ColorWrapper = styled(Box)({
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
})

interface Props {
    mode?: ThemeName
}

export const TilePage: React.FunctionComponent<Props> = ({
    mode = "joy"
}) => {
    const palette = colors(themes[mode].palette)

    return <Wrapper>
        {Object.keys(palette).map((paletteColor: any, i) => {
            return <ColorWrapper key={`tile-${i}`}>
                {
                    Object.keys(palette[paletteColor]).map((key, index) => {
                        const bgcolor = `${palette[paletteColor][key]}`
                        const c = palette[paletteColor].contrastText
                        if (key === "contrastText") {
                            return
                        }
                        return <Tile
                            key={`tile-${i}-${index}`}
                            className="tile"
                            bgcolor={bgcolor}
                            color={c}
                        >
                            <Typography variant="h5" color="inherit">
                                {`${paletteColor}`}
                            </Typography>
                            <Typography variant="caption" color="inherit">
                                {`${key}`}
                            </Typography>
                            <Typography variant="h6" color="inherit">
                                {bgcolor}
                            </Typography>
                        </Tile>
                    })
                }
            </ColorWrapper>
        })}

        <ColorWrapper>
            <Tile
                className="tile"
                bgcolor={`${themes[mode].palette.text.primary}`}
                color={themes[mode].palette.common.white}
            >
                <Typography variant="h5" color="inherit">
                    text
                </Typography>
                <Typography variant="caption" color="inherit">
                    primary
                </Typography>
                <Typography variant="h6" color="inherit">
                    {`${themes[mode].palette.text.primary}`}
                </Typography>
            </Tile>
            <Tile
                className="tile"
                bgcolor={`${themes[mode].palette.text.secondary}`}
                color={themes[mode].palette.common.white}
            >
                <Typography variant="h5" color="inherit">
                    text
                </Typography>
                <Typography variant="caption" color="inherit">
                    secondary
                </Typography>
                <Typography variant="h6" color="inherit">
                    {`${themes[mode].palette.text.secondary}`}
                </Typography>
            </Tile>
        </ColorWrapper>

        <ColorWrapper>
            <Tile
                className="tile"
                bgcolor={themes[mode].palette.background.default}
                color={themes[mode].palette.common.black}
            >
                <Typography variant="h5" color="inherit">
                    background
                </Typography>
                <Typography variant="caption" color="inherit">
                    default
                </Typography>
                <Typography variant="h6" color="inherit">
                    {`${themes[mode].palette.common.white}`}
                </Typography>
            </Tile>
            <Tile
                className="tile"
                bgcolor={themes[mode].palette.background.paper}
                color={themes[mode].palette.common.black}
            >
                <Typography variant="h5" color="inherit">
                    background
                </Typography>
                <Typography variant="caption" color="inherit">
                    paper
                </Typography>
                <Typography variant="h6" color="inherit">
                    {`${themes[mode].palette.common.white}`}
                </Typography>
            </Tile>
        </ColorWrapper>

        <ColorWrapper>
            <Tile
                className="tile"
                bgcolor={themes[mode].palette.common.white}
                color={themes[mode].palette.common.black}
            >
                <Typography variant="h5" color="inherit">
                    common
                </Typography>
                <Typography variant="caption" color="inherit">
                    white
                </Typography>
                <Typography variant="h6" color="inherit">
                    {`${themes[mode].palette.common.white}`}
                </Typography>
            </Tile>

            <Tile
                className="tile"
                bgcolor={themes[mode].palette.common.black}
                color={themes[mode].palette.common.white}
            >
                <Typography variant="h5" color="inherit">
                    common
                </Typography>
                <Typography variant="caption" color="inherit">
                    black
                </Typography>
                <Typography variant="h6" color="inherit">
                    {`${themes[mode].palette.common.black}`}
                </Typography>
            </Tile>
        </ColorWrapper>
    </Wrapper>
}