import { TypographyOptions } from "@mui/material/styles/createTypography"

export const typography: TypographyOptions = {
    allVariants: {
        color: "#260e1e",
    },
    fontFamily: ["Montserrat Alternates", "Kometa", "sans-serif"].join(", "),
    body1: {
        lineHeight: 1.5, // "24px",
        fontSize: "16px",
        fontWeight: 400,
    },
    body2: {
        lineHeight: 1.5, // "21px",
        fontSize: "14px",
        fontWeight: 400,
    },
    h1: {
        lineHeight: 1.2, // "57.6px",
        fontSize: "48px",
        fontWeight: 600,
    },
    h2: {
        lineHeight: 1.2, // "48px",
        fontSize: "40px",
        fontWeight: 600,
    },
    h3: {
        lineHeight: 1.25, // "40px",
        fontSize: "32px",
        fontWeight: 600,
    },
    h4: {
        lineHeight: 1.25, // "30px",
        fontSize: "24px",
        fontWeight: 700,
    },
    h5: {
        lineHeight: 1.4, // "25.2px",
        fontSize: "16px",
        fontWeight: 700,
    },
    h6: {
        lineHeight: 1.4, // "22.4px",
        fontSize: "16px",
        fontWeight: 700,
    },
    button: {
        lineHeight: 1.2, // "16.8px",
        fontSize: "14px",
        fontWeight: 500,
        textTransform: "none",
        letterSpacing: 0.25,
    },
    subtitle1: {
        fontSize: "18px",
        lineHeight: 1.4, // "25.2px",
        fontWeight: 600,
    },
    subtitle2: {
        lineHeight: 1.4, // "22.4px",
        fontSize: "16px",
        fontWeight: 600,
    },
    caption: {
        lineHeight: 1.2, // "16.8px",
        fontSize: "14px",
        fontWeight: 500,
    },
    overline: {
        lineHeight: 1.2, // "14.4px",
        fontSize: "12px",
        fontWeight: 500,
    },
}