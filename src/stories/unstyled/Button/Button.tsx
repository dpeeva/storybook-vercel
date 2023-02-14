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
    lineHeight: 1.2,
    fontFamily: themes[mode].typography.button.fontFamily,
    fontWeight: 500,
    letterSpacing: themes[mode].typography.button.letterSpacing,
    whiteSpace: "nowrap",
    cursor: "pointer",
    transition: "all 150ms ease",

    ...(size === "small" && {
        borderWidth: "1px",
        borderRadius: "15px",
        padding: "4px 14px",
        minHeight: "30px",
        fontSize: "14px",
    }),

    ...(size === "medium" && {
        borderWidth: "1px",
        borderRadius: "18px",
        padding: "5px 20px",
        minHeight: "36px",
        fontSize: "15px",
    }),

    ...(size === "large" && {
        borderWidth: "2px",
        borderRadius: "21px",
        padding: "3px 24px",
        minHeight: "42px",
        fontSize: "16px",
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
        color: themes[mode].palette[color].dark,
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