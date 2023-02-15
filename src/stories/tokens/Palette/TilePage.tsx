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
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "600px",
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
            <Typography variant="h2" sx={{ margin: "12px 0" }}>
                {color.name}
            </Typography>
            <Typography variant="subtitle1" sx={{ margin: "12px 0" }}>
                {color.resume}
            </Typography>
            <Typography variant="body1" sx={{ margin: "12px 0" }}>
                {color.description}
            </Typography>
            <ColorDefinition>
                {color.nuances.map((c, i: number) => <Tile
                    key={`${c}-${i}`}
                    bgcolor={c.value}
                    color={c.color}
                    sx={{ margin: "5px 0", width: "200px" }}
                >
                    <Typography variant="caption" color="inherit">
                        {c.name}
                    </Typography>
                    <Typography variant="h6" color="inherit">
                        {c.value}
                    </Typography>
                </Tile>)}
            </ColorDefinition>
        </ColorWrapper>)}
    </Wrapper>
}