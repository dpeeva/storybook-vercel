import { alpha, styled } from "@mui/material"
import { BaseColor, BaseSize, BaseVariant, ThemeName, themes } from "../../typings"
import { Typography } from "../Typography"
import { IconButton } from "../IconButton"
import { sections } from "./sections"

const Wrapper = styled("div")(({ theme }) => ({
}))

const IconGroup = styled("div")(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
}))

const IconWrapper = styled("div")(({ theme }) => ({
    margin: "10px",
    border: `1px solid ${alpha(theme.palette.common.black, 0.3)}`,
    padding: "20px",
    width: "25%",
    maxWidth: "250px",
    color: theme.palette.common.black,
}))

interface Props {
    mode?: ThemeName
    variant: BaseVariant
    size: BaseSize
    color: BaseColor
}

export const IconsPage: React.FunctionComponent<Props> = ({
    mode = "joy",
    variant,
    size,
    color
}) => {
    return <Wrapper theme={themes[mode]}>
        {sections.map(section => <>
            <Typography textType="h1">{section.name}</Typography>
            <IconGroup>
                {section.iconsSet.map((icon, i: number) => <IconWrapper
                    key={`${i}`}
                    theme={themes[mode]}
                >
                    <Typography textType="h5">{`${icon.name}`}</Typography>
                    <IconButton
                        variant={variant}
                        size={size}
                        color={color}
                    >
                        <icon.component />
                    </IconButton>
                </IconWrapper>
                )}
            </IconGroup>
        </>)}
    </Wrapper >
}