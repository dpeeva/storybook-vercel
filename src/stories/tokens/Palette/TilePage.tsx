import React from "react"
import { Box, styled, Typography } from "@mui/material"
import { ThemeName, themes } from "../../../typings"
import { backgroundColor, commonColor, errorColor, infoColor, primaryColor, secondaryColor, shadesColor, successColor, textColor, warningColor } from "./colors"
import { Tile } from "./Tile"

const Wrapper = styled(Box)({
    display: "flex",
    flexWrap: "wrap",
})

const ColorWrapper = styled(Box)({
    marginRight: "40px",
    marginBottom: "20px",
    width: "100%",
})

const ColorDefinition = styled(Box)({
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
    alignItems: "center",
})

interface Props {
    mode?: ThemeName
}

export const TilePage: React.FunctionComponent<Props> = ({
    mode = "joy"
}) => {
    const palette = themes[mode].palette
    const colors = [
        primaryColor(palette),
        secondaryColor(palette),
        successColor(palette),
        errorColor(palette),
        warningColor(palette),
        infoColor(palette),
        backgroundColor(palette),
        textColor(palette),
        commonColor(palette),
        shadesColor(palette),
    ]

    return <Wrapper>
        {colors.map((color, index) => <ColorWrapper key={`${color}-${index}`}>
            <Typography variant="h2">
                {color.name}
            </Typography>
            <Typography variant="subtitle1">
                {color.resume}
            </Typography>
            <Typography variant="body1">
                {color.description}
            </Typography>
            {color.nuances.map((c, i: number) => <ColorDefinition key={`${c}-${i}`}>
                <Tile
                    key={`tile-${i}`}
                    bgcolor={c.value}
                    color={color.contrastText}
                    sx={{ margin: "5px 0", width: "200px" }}
                >
                    <Typography variant="caption" color="inherit">
                        {c.name}
                    </Typography>
                    <Typography variant="h6" color="inherit">
                        {c.value}
                    </Typography>
                </Tile>
            </ColorDefinition>)}
        </ColorWrapper>)}
    </Wrapper>
}