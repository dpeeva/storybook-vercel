import { alpha, styled } from "@mui/system"
import ButtonUnstyled, { buttonUnstyledClasses, ButtonUnstyledProps } from "@mui/base/ButtonUnstyled"
import { BaseColor, ThemeName, themes } from "../../typings"


export interface Props extends ButtonUnstyledProps {
    mode: ThemeName
    color: BaseColor
    variant?: "text" | "outlined" | "contained"
    size?: "small" | "medium" | "large"
}

export const Button = styled(ButtonUnstyled)<Props>(
    ({ mode, variant, color, size }: Props) => ({
        border: "none",
        padding: "8px 16px",
        letterSpacing: themes[mode].typography.button.letterSpacing,
        fontSize: themes[mode].typography.button.fontSize,
        cursor: "pointer",
        transition: "all 150ms ease",
        [`&.${buttonUnstyledClasses.focusVisible}`]: {
            outline: "none",
        },
        ...(variant === "contained" && {
            backgroundColor: themes[mode].palette[color].main,
            color: themes[mode].palette[color].contrastText,
            ["&:hover"]: {
                backgroundColor: themes[mode].palette[color].dark,
            },
            [`&.${buttonUnstyledClasses.active}`]: {
                backgroundColor: themes[mode].palette[color].dark,
            },
            [`&.${buttonUnstyledClasses.disabled}`]: {
                pointerEvents: "none",
                backgroundColor: alpha(themes[mode].palette[color].main, 0.5),
            }
        }),
        ...(variant === "outlined" && {
            ...(color === "primary" && {
                border: `1px solid ${themes[mode].palette.primary.main}`,
            }),
        }),
    })
)