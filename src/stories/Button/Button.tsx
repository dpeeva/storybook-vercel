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
        display: "flex",
        alignItems: "center",
        border: "none",
        borderRadius: "18px",
        padding: "5px 18px",
        lineHeight: 1,
        minHeight: "34px",
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
                border: `2px solid ${themes[mode].palette.primary.main}`,
                backgroundColor: "transparent",
                color: themes[mode].palette.primary.main,
                ["&:hover"]: {
                    borderColor: darken(themes[mode].palette[color].main, 0.05),
                    backgroundColor: alpha(themes[mode].palette[color].main, 0.05),
                },
                [`&.${buttonUnstyledClasses.active}`]: {
                    borderColor: darken(themes[mode].palette[color].main, 0.05),
                },
                [`&.${buttonUnstyledClasses.disabled}`]: {
                    pointerEvents: "none",
                    borderColor: alpha(themes[mode].palette[color].main, 0.5),
                    color: alpha(themes[mode].palette[color].main, 0.5),
                }
            }),
        }),
        [".MuiSvgIcon-root"]: {
            margin: "0 8px",
            ["&:first-child"]: {
                marginLeft: "-2px",
            },
            ["&:last-child"]: {
                marginRight: "-2px",
            },
        },
    })
)