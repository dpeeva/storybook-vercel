import { alpha, darken, lighten, styled } from "@mui/system"
import ButtonUnstyled, { buttonUnstyledClasses, ButtonUnstyledProps } from "@mui/base/ButtonUnstyled"
import { BaseColor, BaseSize, BaseVariant, ThemeName, themes } from "../../typings"

export interface Props extends ButtonUnstyledProps {
    mode?: ThemeName
    color?: BaseColor
    variant?: BaseVariant
    size?: BaseSize
}

export const Button = styled(ButtonUnstyled)<Props>(({
    mode = "joy",
    variant = "contained",
    color = "primary",
    size = "small"
}: Props) => ({
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid transparent",
    borderRadius: "17px",
    padding: "7px 16px 5px",
    lineHeight: 0,
    minHeight: "34px",
    fontFamily: themes[mode].typography.button.fontFamily,
    fontWeight: 500,
    letterSpacing: themes[mode].typography.button.letterSpacing,
    fontSize: themes[mode].typography.button.fontSize,
    textTransform: themes[mode].typography.button.textTransform,
    whiteSpace: "nowrap",
    cursor: "pointer",
    transition: "all 150ms ease",

    [`&.${buttonUnstyledClasses.focusVisible}`]: {
        outline: "none",
    },

    [`&.${buttonUnstyledClasses.disabled}`]: {
        pointerEvents: "none",
    },

    ...(variant === "contained" && {
        backgroundColor: themes[mode].palette[color].main,
        color: themes[mode].palette[color].contrastText,
        [`&:hover, &.${buttonUnstyledClasses.active}`]: {
            backgroundColor: darken(themes[mode].palette[color].main, 0.15),
        },
        [`&.${buttonUnstyledClasses.disabled}`]: {
            backgroundColor: alpha(themes[mode].palette[color].main, 0.5),
            color: alpha(themes[mode].palette[color].contrastText, 0.5),
        },
        ...(color === "primary" && {
            [`&:hover, &.${buttonUnstyledClasses.active}`]: {
                backgroundColor: lighten(themes[mode].palette[color].main, 0.35),
            },
            [".MuiSvgIcon-root"]: {
                color: themes[mode].palette.common.black,
            }
        }),
        ...(color === "info" && {
            [`&:hover, &.${buttonUnstyledClasses.active}`]: {
                backgroundColor: lighten(themes[mode].palette[color].main, 0.35),
            }
        }),
    }),

    ...(variant === "outlined" && {
        borderColor: themes[mode].palette[color].main,
        backgroundColor: "transparent",
        color: themes[mode].palette.common.black,
        [`&:hover, &.${buttonUnstyledClasses.active}`]: {
            backgroundColor: lighten(themes[mode].palette[color].light, 0.85),
        },
        [`&.${buttonUnstyledClasses.disabled}`]: {
            borderColor: alpha(themes[mode].palette[color].dark, 0.5),
            backgroundColor: alpha(themes[mode].palette[color].light, 0.5),
            color: alpha(themes[mode].palette[color].dark, 0.5),
        },
        [".MuiSvgIcon-root"]: {
            color: themes[mode].palette[color].dark,
        },
        ...(color === "info" && {
            [`&:hover, &.${buttonUnstyledClasses.active}`]: {
                backgroundColor: lighten(themes[mode].palette[color].light, 0.95),
            }
        }),
    }),

    ...(variant === "text" && {
        backgroundColor: "transparent",
        color: themes[mode].palette.common.black,
        [`&:hover, &.${buttonUnstyledClasses.active}`]: {
            backgroundColor: lighten(themes[mode].palette[color].light, 0.85),
        },
        [`&.${buttonUnstyledClasses.disabled}`]: {
            backgroundColor: alpha(themes[mode].palette[color].light, 0.5),
            color: alpha(themes[mode].palette[color].light, 0.5),
        },
        [".MuiSvgIcon-root"]: {
            color: themes[mode].palette[color].dark,
        },
        ...(color === "primary" && {
            [`&:hover, &.${buttonUnstyledClasses.active}`]: {
                backgroundColor: lighten(themes[mode].palette[color].light, 0.75),
            }
        }),
        ...(color === "info" && {
            [`&:hover, &.${buttonUnstyledClasses.active}`]: {
                backgroundColor: lighten(themes[mode].palette[color].light, 0.95),
            }
        }),
    }),

}))