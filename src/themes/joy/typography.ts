import { TypographyOptions } from "@mui/material/styles/createTypography"

export const typography: TypographyOptions = {
    allVariants: {
        color: "#260e1e",
    },
    fontFamily: ["Montserrat Alternates", "Kometa", "sans-serif"].join(", "),
    body1: {
        fontSize: "16px",
        lineHeight: 1.5, // "24px",
        fontWeight: 400,
    },
    body2: {
        fontSize: "14px",
        lineHeight: 1.5, // "21px",
        fontWeight: 400,
    },
    h1: {
        fontSize: "48px",
        lineHeight: 1.5,
        fontWeight: 600,
    },
    h2: {
        fontSize: "40px",
        lineHeight: 1.5,
        fontWeight: 600,
    },
    h3: {
        fontSize: "32px",
        lineHeight: 1.5,
        fontWeight: 600,
    },
    h4: {
        fontSize: "24px",
        lineHeight: 1.5,
        fontWeight: 700,
    },
    h5: {
        fontSize: "16px",
        lineHeight: 1.5,
        fontWeight: 700,
    },
    h6: {
        fontSize: "14px",
        lineHeight: 1.5,
        fontWeight: 700,
    },
    button: {
        lineHeight: 1.2,
        fontSize: "14px",
        fontWeight: 500,
        textTransform: "none",
        letterSpacing: 0.25,
    },
    subtitle1: {
        fontSize: "18px",
        lineHeight: 1.5,
        fontWeight: 600,
    },
    subtitle2: {
        fontSize: "16px",
        lineHeight: 1.5,
        fontWeight: 600,
    },
    caption: {
        fontSize: "14px",
        lineHeight: 1,
        fontWeight: 500,
    },
    overline: {
        fontSize: "12px",
        lineHeight: 1,
        fontWeight: 500,
    },
}