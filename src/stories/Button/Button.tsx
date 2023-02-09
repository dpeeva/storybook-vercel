import { alpha, darken, styled } from "@mui/system"
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
        borderRadius: "18px",
        padding: "12px 20px",
        lineHeight: 1,
        fontFamily: themes[mode].typography.button.fontFamily,
        fontWeight: 500,
        letterSpacing: themes[mode].typography.button.letterSpacing,
        fontSize: themes[mode].typography.button.fontSize,
        textTransform: "uppercase",
        cursor: "pointer",
        transition: "all 150ms ease",
        [`&.${buttonUnstyledClasses.focusVisible}`]: {
            outline: "none",
        },
        ...(variant === "contained" && {
            backgroundColor: themes[mode].palette[color].main,
            color: themes[mode].palette[color].contrastText,
            ["&:hover"]: {
                backgroundColor: darken(themes[mode].palette[color].main, 0.05),
            },
            [`&.${buttonUnstyledClasses.active}`]: {
                backgroundColor: darken(themes[mode].palette[color].main, 0.05),
            },
            [`&.${buttonUnstyledClasses.disabled}`]: {
                pointerEvents: "none",
                backgroundColor: alpha(themes[mode].palette[color].main, 0.5),
                color: alpha(themes[mode].palette[color].contrastText, 0.5),
            }
        }),
        ...(variant === "outlined" && {
            ...(color === "primary" && {
                border: `1px solid ${themes[mode].palette.primary.main}`,
            }),
        }),
    })
)