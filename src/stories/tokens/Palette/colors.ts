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
    resume: "Първичен цвят",
    description: "The primary color palette is used across all the interactive elements, such as CTAs, links, inputs, active states, etc.",
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
    resume: "Вторичен цвят",
    description: "The secondary color palette is used alongside the primary to indicate to the user it’s the secondary focus.",
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
    resume: "за успешни действия",
    description: "These colors depict an emotion of positivity. Generally used across success, complete states.",
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
    resume: "при съобщения за грешка",
    description: "These colors depict an emotion of negativity. Generally used across error states.",
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
    resume: "за предупредителни съобщения",
    description: "These colors depict an emotion of holding. Generally used across warning or on-hold states.",
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
    resume: "за информационни съобщения",
    description: "These colors depict an emotion of searching. Generally used for consuming additional information.",
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

export const backgroundColor = (palette: Palette) => ({
    name: "Background",
    resume: "цвят на фон",
    description: "General colors used for backgrounds.",
    nuances: [
        {
            name: "по подразбиране", // "default",
            value: palette.background.default,
            description: "цвят за по-голямата част от съдържанието",
        },
        {
            name: "на подложка", // "paper",
            value: palette.background.paper,
            description: "цвят при подложки на списъци, падащи менюта и др.",
        },
    ],
    contrastText: palette.common.black,
})

export const textColor = (palette: Palette) => ({
    name: "Text",
    resume: "цвят на текста",
    description: "General colors used for text content.",
    nuances: [
        {
            name: "първичен", // "primary",
            value: palette.text.primary,
            description: "основен цвят на текста",
        },
        {
            name: "вторичен", // "secondary",
            value: palette.text.secondary,
            description: "алтернативен цвят на текста",
        },
        {
            name: "неактивно състояние", // "disabled",
            value: palette.text.disabled,
            description: "при неактивно състояние на контролите",
        },
    ],
    contrastText: palette.common.white,
})

export const commonColor = (palette: Palette) => ({
    name: "Common",
    resume: "базови цветове",
    description: "General colors used for every type of content.",
    nuances: [
        {
            name: "черно", // "black",
            value: palette.common.black,
            description: "базов цвят",
        },
        {
            name: "бяло", // "white",
            value: palette.common.white,
            description: "базов цвят",
        },
    ],
    contrastText: palette.info.main,
})

export const shadesColor = (palette: Palette) => ({
    name: "Grey",
    resume: "нюанси на сивото",
    description: "These colors are used as supporting secondary colors in backgrounds, text colors, separators, modals, etc. ",
    nuances: [
        {
            name: "50",
            value: palette.grey[50],
            description: "цвят",
        },
        {
            name: "100",
            value: palette.grey[100],
            description: "цвят",
        },
        {
            name: "200",
            value: palette.grey[200],
            description: "цвят",
        },
        {
            name: "300",
            value: palette.grey[300],
            description: "цвят",
        },
        {
            name: "400",
            value: palette.grey[400],
            description: "цвят",
        },
        {
            name: "500",
            value: palette.grey[500],
            description: "цвят",
        },
        {
            name: "600",
            value: palette.grey[600],
            description: "цвят",
        },
        {
            name: "700",
            value: palette.grey[700],
            description: "цвят",
        },
        {
            name: "800",
            value: palette.grey[800],
            description: "цвят",
        },
        {
            name: "900",
            value: palette.grey[900],
            description: "цвят",
        },
        {
            name: "A100",
            value: palette.grey["A100"],
            description: "цвят",
        },
        {
            name: "A200",
            value: palette.grey["A200"],
            description: "цвят",
        },
    ],
    contrastText: palette.primary.dark,
})