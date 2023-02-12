import { Palette } from "@mui/material"

export const colors = (palette: Palette): Omit<Palette,
    "common"
    | "mode"
    | "contrastThreshold"
    | "tonalOffset"
    | "grey"
    | "text"
    | "divider"
    | "action"
    | "background"
    | "getContrastText"
    | "augmentColor"
> => ({
    primary: {
        main: palette.primary.main,
        light: palette.primary.light,
        dark: palette.primary.dark,
        contrastText: palette.primary.contrastText
    },
    secondary: {
        main: palette.secondary.main,
        light: palette.secondary.light,
        dark: palette.secondary.dark,
        contrastText: palette.secondary.contrastText
    },
    success: {
        main: palette.success.main,
        light: palette.success.light,
        dark: palette.success.dark,
        contrastText: palette.success.contrastText
    },
    error: {
        main: palette.error.main,
        light: palette.error.light,
        dark: palette.error.dark,
        contrastText: palette.error.contrastText
    },
    warning: {
        main: palette.warning.main,
        light: palette.warning.light,
        dark: palette.warning.dark,
        contrastText: palette.warning.contrastText
    },
    info: {
        main: palette.info.main,
        light: palette.info.light,
        dark: palette.info.dark,
        contrastText: palette.info.contrastText
    },
})