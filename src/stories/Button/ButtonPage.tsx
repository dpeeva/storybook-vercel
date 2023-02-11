import { styled } from "@mui/material"
import React from "react"
import { muiIcons } from "../../mui"
import { ThemeName } from "../../typings"
import { baseColors, baseVariants } from "../constants"
import { IconButton } from "../IconButton"
import { Adornment } from "./Adornment"
import { Button } from "./Button"

const Wrapper = styled("div")({
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
})

const Pair = styled("div")({
    display: "flex",
})

const Line = styled("div")({
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    [".MuiButton-root"]: {
        margin: "5px",
    }
})

interface Props {
    mode?: ThemeName
    disabled: boolean
}

export const ButtonPage: React.FunctionComponent<Props> = ({
    mode,
    disabled
}) => {
    return <Wrapper>
        {baseColors.map((c: any, index: number) => {
            return <Line key={`line-${index}`}>
                {baseVariants.map((v: any, i: number) => {
                    return <Pair key={`pair-${index}-${i}`}>
                        <Button
                            mode={mode}
                            color={c}
                            variant={v}
                            disabled={disabled}
                        >Добави в каталог</Button>

                        <Button
                            mode={mode}
                            color={c}
                            variant={v}
                            disabled={disabled}
                        >
                            Добави в каталог
                            <Adornment position="end">
                                <muiIcons.AddCircleRounded fontSize="small" />
                            </Adornment>
                        </Button>

                        <IconButton
                            mode={mode}
                            color={c}
                            variant={v}
                            disabled={disabled}
                        >
                            <muiIcons.AddCircleRounded fontSize="small" />
                        </IconButton>
                    </Pair>
                })}
            </Line>
        })}
    </Wrapper>
}