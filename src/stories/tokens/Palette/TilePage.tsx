import React from "react"
import { Box, styled, Typography } from "@mui/material"
import { ThemeName, themes } from "../../../typings"
import { backgroundColor, commonColor, errorColor, infoColor, primaryColor, secondaryColor, successColor, textColor, warningColor } from "./colors"
import { Tile } from "./Tile"

const Wrapper = styled(Box)({
    display: "flex",
    flexWrap: "wrap",
})

const ColorWrapper = styled(Box)({
    marginRight: "40px",
    marginBottom: "20px",
    width: "calc(100% / 3 - 80px)",
    minWidth: "400px",
})

const ColorDefinition = styled(Box)({
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
    alignItems: "center",
})

const Description = styled(Box)(({ theme }) => ({
    paddingLeft: "20px",
    color: theme.palette.text.primary,
}))

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
    ]

    return <Wrapper>
        {colors.map((color, index) => <ColorWrapper key={`${color}-${index}`}>
            <Typography variant="h2">
                {color.name}
            </Typography>
            <Typography>
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
                <Description>
                    <Typography color="inherit">
                        {c.description}
                    </Typography>
                </Description>
            </ColorDefinition>)}
        </ColorWrapper>)}
    </Wrapper>
}