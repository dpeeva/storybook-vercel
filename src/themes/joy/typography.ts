import { TypographyOptions } from "@mui/material/styles/createTypography"

export const typography: TypographyOptions = {
    allVariants: {
        color: "#260e1e",
    },
    fontFamily: ["Kometa", "Montserrat", "sans-serif"].join(", "),
    body1: {
        fontSize: "18px",
        lineHeight: 1.6,
        fontWeight: 400,
    },
    body2: {
        fontSize: "16px",
        lineHeight: 1.55,
        fontWeight: 400,
    },
    h1: {
        fontSize: "56px",
        lineHeight: 1.5,
        fontWeight: 600,
    },
    h2: {
        fontSize: "48px",
        lineHeight: 1.5,
        fontWeight: 600,
    },
    h3: {
        fontSize: "36px",
        lineHeight: 1.5,
        fontWeight: 600,
    },
    h4: {
        fontSize: "28px",
        lineHeight: 1.5,
        fontWeight: 700,
    },
    h5: {
        fontSize: "24px",
        lineHeight: 1.5,
        fontWeight: 700,
    },
    h6: {
        fontSize: "18px",
        lineHeight: 1.5,
        fontWeight: 700,
    },
    button: {
        fontSize: "11px",
        // textTransform: "none",
        letterSpacing: 0.25,
        fontWeight: 400,
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
        fontSize: "16px",
        lineHeight: 1,
        fontWeight: 500,
    },
    overline: {
        fontSize: "14px",
        lineHeight: 1,
        fontWeight: 500,
    },
}