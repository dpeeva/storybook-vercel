import { Add } from "@mui/icons-material"
import { styled } from "@mui/material"
import { ThemeName, themes } from "../../typings"
import { baseColors } from "../constants"
import { IconButton } from "./IconButton"

const Wrapper = styled("div")(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
}))

const IconGroup = styled("div")(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    margin: "10px",
}))

interface Props {
    mode?: ThemeName
    disabled: boolean
}

export const IconButtonPage: React.FunctionComponent<Props> = ({
    mode = "joy",
    disabled
}) => {
    return <Wrapper theme={themes[mode]}>
        {baseColors.map((c: any, i: number) =>
            <IconGroup key={`icon-group-${i}`}>
                <IconButton
                    variant="contained"
                    color={c}
                    disabled={disabled}
                >
                    <Add fontSize="small" />
                </IconButton>

                <IconButton
                    variant="outlined"
                    color={c}
                    disabled={disabled}
                >
                    <Add fontSize="small" />
                </IconButton>

                <IconButton
                    variant="text"
                    color={c}
                    disabled={disabled}
                >
                    <Add fontSize="small" />
                </IconButton>
            </IconGroup>
        )}
    </Wrapper >
}