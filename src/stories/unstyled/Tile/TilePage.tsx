import { styled } from "@mui/material"
import React from "react"
import { BaseColor, ThemeName, themes } from "../../../typings"
import { baseColors } from "../../constants"
import { Typography } from "../Typography"
import { Tile } from "./Tile"

const Wrapper = styled("div")({
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    [".tile"]: {
        margin: "5px",
        width: "25%"
    },
})

interface Props {
    mode?: ThemeName
}

export const TilePage: React.FunctionComponent<Props> = ({
    mode = "joy"
}) => {
    return <Wrapper>
        {baseColors.map((c: any, index: number) => <Tile
            key={`tile-${index}`}
            className="tile"
            color={c}
        >
            <Typography textType="h5">
                {`${c}`}
            </Typography>
            {`${themes[mode].palette[c as BaseColor].main}`}
        </Tile>
        )}
    </Wrapper>
}