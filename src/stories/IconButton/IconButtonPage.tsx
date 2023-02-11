import { alpha, styled } from "@mui/material"
import { icons } from "../../mui"
import { BaseColor, BaseVariant, ThemeName, themes } from "../../typings"
import { Typography } from "../Typography"
import { IconButton } from "./IconButton"

const Wrapper = styled("div")(({ theme }) => ({
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
    color: BaseColor
}

export const IconButtonPage: React.FunctionComponent<Props> = ({
    mode = "joy",
    variant,
    color
}) => {
    return <Wrapper theme={themes[mode]}>
        {icons.map((icon, i: number) => <IconWrapper
            key={`${i}`}
            theme={themes[mode]}
        >
            <Typography textType="h5">{`${icon.name}`}</Typography>
            <IconButton
                variant={variant}
                color={color}
            >
                <icon.component fontSize="small" />
            </IconButton>
        </IconWrapper>
        )}
    </Wrapper >
}