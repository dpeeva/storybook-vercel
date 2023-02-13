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

export const primaryColor = (palette: Palette) => ({
    name: "Primary",
    description: "Първичен цвят",
    nuances: [
        {
            name: "основен", // "main",
            value: palette.primary.main,
            description: "основен цвят",
        },
        {
            name: "светъл", // "light",
            value: palette.primary.light,
            description: "светъл нюанс",
        },
        {
            name: "тъмен", // "dark",
            value: palette.primary.dark,
            description: "тъмен нюанс",
        },
    ],
    contrastText: palette.primary.contrastText,
})

export const secondaryColor = (palette: Palette) => ({
    name: "Secondary",
    description: "Вторичен цвят",
    nuances: [
        {
            name: "основен", // "main",
            value: palette.secondary.main,
            description: "основен цвят",
        },
        {
            name: "светъл", // "light",
            value: palette.secondary.light,
            description: "светъл нюанс",
        },
        {
            name: "тъмен", // "dark",
            value: palette.secondary.dark,
            description: "тъмен нюанс",
        },
    ],
    contrastText: palette.secondary.contrastText,
})

export const successColor = (palette: Palette) => ({
    name: "Success",
    description: "за успешна операция",
    nuances: [
        {
            name: "основен", // "main",
            value: palette.success.main,
            description: "основен цвят",
        },
        {
            name: "светъл", // "light",
            value: palette.success.light,
            description: "светъл нюанс",
        },
        {
            name: "тъмен", // "dark",
            value: palette.success.dark,
            description: "тъмен нюанс",
        },
    ],
    contrastText: palette.success.contrastText,
})

export const errorColor = (palette: Palette) => ({
    name: "Error",
    description: "за съобщения за грешка",
    nuances: [
        {
            name: "основен", // "main",
            value: palette.error.main,
            description: "основен цвят",
        },
        {
            name: "светъл", // "light",
            value: palette.error.light,
            description: "светъл нюанс",
        },
        {
            name: "тъмен", // "dark",
            value: palette.error.dark,
            description: "тъмен нюанс",
        },
    ],
    contrastText: palette.error.contrastText,
})

export const warningColor = (palette: Palette) => ({
    name: "Warning",
    description: "за предупредителни съобщения",
    nuances: [
        {
            name: "основен", // "main",
            value: palette.warning.main,
            description: "основен цвят",
        },
        {
            name: "светъл", // "light",
            value: palette.warning.light,
            description: "светъл нюанс",
        },
        {
            name: "тъмен", // "dark",
            value: palette.warning.dark,
            description: "тъмен нюанс",
        },
    ],
    contrastText: palette.warning.contrastText,
})

export const infoColor = (palette: Palette) => ({
    name: "Info",
    description: "за информационни съобщения",
    nuances: [
        {
            name: "основен", // "main",
            value: palette.info.main,
            description: "основен цвят",
        },
        {
            name: "светъл", // "light",
            value: palette.info.light,
            description: "светъл нюанс",
        },
        {
            name: "тъмен", // "dark",
            value: palette.info.dark,
            description: "тъмен нюанс",
        },
    ],
    contrastText: palette.info.contrastText,
})