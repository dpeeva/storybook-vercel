import { TypographyOptions } from "@mui/material/styles/createTypography"

export const FONT_WEIGHTS = {
    thin: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
}

export const typography: TypographyOptions = {
    allVariants: {
        color: "#260e1e",
    },
    fontFamily: ["Montserrat Alternates", "Kometa", "sans-serif"].join(", "),
    body1: {
        lineHeight: 1.75, // "24px",
        fontSize: "16px",
        fontWeight: FONT_WEIGHTS.regular,
    },
    body2: {
        lineHeight: 1.75, // "21px",
        fontSize: "14px",
        fontWeight: FONT_WEIGHTS.regular,
    },
    h1: {
        lineHeight: 1.2, // "57.6px",
        fontSize: "48px",
        fontWeight: FONT_WEIGHTS.semiBold,
    },
    h2: {
        lineHeight: 1.2, // "48px",
        fontSize: "40px",
        fontWeight: FONT_WEIGHTS.semiBold,
    },
    h3: {
        lineHeight: 1.25, // "40px",
        fontSize: "32px",
        fontWeight: FONT_WEIGHTS.semiBold,
    },
    h4: {
        lineHeight: 1.25, // "30px",
        fontSize: "24px",
        fontWeight: FONT_WEIGHTS.bold,
    },
    h5: {
        lineHeight: 1.4, // "25.2px",
        fontSize: "16px",
        fontWeight: FONT_WEIGHTS.bold,
    },
    h6: {
        lineHeight: 1.4, // "22.4px",
        fontSize: "16px",
        fontWeight: FONT_WEIGHTS.bold,
    },
    button: {
        lineHeight: 1.2, // "16.8px",
        fontSize: "14px",
        fontWeight: FONT_WEIGHTS.medium,
        textTransform: "none",
        letterSpacing: 0.25,
    },
    subtitle1: {
        fontSize: "18px",
        lineHeight: 1.4, // "25.2px",
        fontWeight: FONT_WEIGHTS.semiBold,
    },
    subtitle2: {
        lineHeight: 1.4, // "22.4px",
        fontSize: "16px",
        fontWeight: FONT_WEIGHTS.semiBold,
    },
    caption: {
        lineHeight: 1.2, // "16.8px",
        fontSize: "14px",
        fontWeight: FONT_WEIGHTS.medium,
    },
    overline: {
        lineHeight: 1.2, // "14.4px",
        fontSize: "12px",
        fontWeight: FONT_WEIGHTS.medium,
    },
}