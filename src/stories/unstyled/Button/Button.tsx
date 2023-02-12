import { alpha, darken, lighten, styled } from "@mui/system"
import ButtonUnstyled, { buttonUnstyledClasses, ButtonUnstyledProps } from "@mui/base/ButtonUnstyled"
import { BaseColor, BaseSize, BaseVariant, ThemeName, themes } from "../../../typings"

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
    borderStyle: "solid",
    borderColor: "transparent",
    lineHeight: 0,
    fontFamily: themes[mode].typography.button.fontFamily,
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: themes[mode].typography.button.letterSpacing,
    whiteSpace: "nowrap",
    cursor: "pointer",
    transition: "all 150ms ease",

    ...(size === "small" && {
        borderWidth: "1px",
        borderRadius: "17px",
        padding: "7px 16px 5px",
        minHeight: "34px",
        fontSize: "11px",
    }),

    ...(size === "medium" && {
        borderWidth: "1px",
        borderRadius: "20px",
        padding: "7px 18px 5px",
        minHeight: "40px",
        fontSize: "12px",
    }),

    ...(size === "large" && {
        borderWidth: "2px",
        borderRadius: "23px",
        padding: "4px 18px 3px",
        minHeight: "46px",
        fontSize: "14px",
    }),

    [`&.${buttonUnstyledClasses.focusVisible}`]: {
        outline: "none",
    },

    ...(variant === "contained" && {
        backgroundColor: themes[mode].palette[color].main,
        color: themes[mode].palette[color].contrastText,
        [`&:hover, &.${buttonUnstyledClasses.active}`]: {
            backgroundColor: darken(themes[mode].palette[color].main, 0.15),
        },
        [`&.${buttonUnstyledClasses.disabled}`]: {
            pointerEvents: "none",
            backgroundColor: alpha(themes[mode].palette[color].main, 0.25),
            color: alpha(themes[mode].palette.common.black, 0.35),
            [".MuiSvgIcon-root"]: {
                color: alpha(themes[mode].palette.common.black, 0.25),
            },
        },
        ...(color === "primary" && {
            [`&:hover, &.${buttonUnstyledClasses.active}`]: {
                backgroundColor: lighten(themes[mode].palette[color].main, 0.35),
            },
            [".MuiSvgIcon-root"]: {
                color: themes[mode].palette.common.black,
            },
        }),
        ...(color === "info" && {
            [`&:hover, &.${buttonUnstyledClasses.active}`]: {
                backgroundColor: lighten(themes[mode].palette[color].main, 0.25),
            },
            [`&.${buttonUnstyledClasses.disabled}`]: {
                pointerEvents: "none",
                backgroundColor: alpha(themes[mode].palette[color].main, 0.15),
                color: alpha(themes[mode].palette.common.black, 0.35),
            },
        }),

        ...(size === "small" && {
            [".MuiSvgIcon-root"]: {
                fontSize: "20px",
            },
        }),

        ...(size === "medium" && {
            [".MuiSvgIcon-root"]: {
                fontSize: "24px",
            },
        }),

        ...(size === "large" && {
            [".MuiSvgIcon-root"]: {
                fontSize: "32px",
            },
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
            pointerEvents: "none",
            borderColor: alpha(themes[mode].palette[color].dark, 0.35),
            color: alpha(themes[mode].palette.common.black, 0.35),
            [".MuiSvgIcon-root"]: {
                color: alpha(themes[mode].palette.common.black, 0.35),
            },
        },
        ...(color === "info" && {
            [`&:hover, &.${buttonUnstyledClasses.active}`]: {
                backgroundColor: lighten(themes[mode].palette[color].light, 0.9),
                [".MuiSvgIcon-root"]: {
                    color: themes[mode].palette.common.black,
                },
            },
            [`&.${buttonUnstyledClasses.disabled}`]: {
                pointerEvents: "none",
                borderColor: alpha(themes[mode].palette[color].dark, 0.35),
                color: alpha(themes[mode].palette.common.black, 0.35),
                [".MuiSvgIcon-root"]: {
                    color: alpha(themes[mode].palette.common.black, 0.35),
                },
            },
            [".MuiSvgIcon-root"]: {
                color: alpha(themes[mode].palette.common.black, 0.85),
            },
        }),

        ...(size === "small" && {
            [".MuiSvgIcon-root"]: {
                fontSize: "20px",
            },
        }),

        ...(size === "medium" && {
            [".MuiSvgIcon-root"]: {
                fontSize: "24px",
            },
        }),

        ...(size === "large" && {
            [".MuiSvgIcon-root"]: {
                fontSize: "32px",
            },
        }),
    }),

    ...(variant === "text" && {
        backgroundColor: "transparent",
        color: themes[mode].palette.common.black,
        [`&:hover, &.${buttonUnstyledClasses.active}`]: {
            backgroundColor: lighten(themes[mode].palette[color].light, 0.85),
        },
        [`&.${buttonUnstyledClasses.disabled}`]: {
            pointerEvents: "none",
            color: alpha(themes[mode].palette.common.black, 0.35),
            [".MuiSvgIcon-root"]: {
                color: alpha(themes[mode].palette.common.black, 0.35),
            },
        },
        [".MuiSvgIcon-root"]: {
            color: themes[mode].palette[color].dark,
        },

        ...(color === "primary" && {
            [`&:hover, &.${buttonUnstyledClasses.active}`]: {
                backgroundColor: lighten(themes[mode].palette[color].light, 0.75),
            },
        }),

        ...(color === "info" && {
            [`&:hover, &.${buttonUnstyledClasses.active}`]: {
                backgroundColor: lighten(themes[mode].palette[color].light, 0.9),
            },
        }),

        ...(size === "small" && {
            [".MuiSvgIcon-root"]: {
                fontSize: "20px",
            },
        }),

        ...(size === "medium" && {
            [".MuiSvgIcon-root"]: {
                fontSize: "24px",
            },
        }),

        ...(size === "large" && {
            [".MuiSvgIcon-root"]: {
                fontSize: "32px",
            },
        }),
    }),

}))