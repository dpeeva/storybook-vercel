import { Add, AddCircle } from "@mui/icons-material"
import { styled } from "@mui/material"
import React from "react"
import { BaseSize, ThemeName, themes } from "../../../typings"
import { baseColors, baseVariants } from "../../constants"
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
    size: BaseSize
    disabled: boolean
}

export const ButtonPage: React.FunctionComponent<Props> = ({
    mode = "joy",
    size,
    disabled
}) => {
    return <Wrapper theme={themes[mode]}>
        {baseColors.map((c: any, index: number) => (
            <Line key={`line-${index}`}>
                {baseVariants.map((v: any, i: number) => (
                    <Pair key={`pair-${index}-${i}`}>
                        <Button
                            variant={v}
                            color={c}
                            size={size}
                            disabled={disabled}
                        >Добави в каталог</Button>

                        <Button
                            variant={v}
                            color={c}
                            size={size}
                            disabled={disabled}
                        >
                            Добави в каталог
                            <Adornment
                                position="end"
                                size={size}
                            >
                                <AddCircle />
                            </Adornment>
                        </Button>

                        <IconButton
                            variant={v}
                            color={c}
                            size={size}
                            disabled={disabled}
                        >
                            <Add />
                        </IconButton>
                    </Pair>
                ))}
            </Line>
        ))}
    </Wrapper>
}