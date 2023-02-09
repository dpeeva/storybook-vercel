import { createTheme } from "@mui/material"
import { components } from "./components"

export const joy = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#EBBE9B",
            light: "#EBBE9B",
            dark: "#E59D67",
            contrastText: "#000000",
        },
        secondary: {
            main: "#9DE3EB",
            light: "#9DE3EB",
            dark: "#6EC2CB",
            contrastText: "#000000",
        },
        info: {
            main: "#6EC2CB",
            contrastText: "#fff",
        },
        error: {
            main: "#e93a30",
            contrastText: "#fff",
        },
        success: {
            main: "#689419",
            contrastText: "#fff",
        },
        warning: {
            main: "#ee7348",
            contrastText: "#fff",
        },
    },
    typography: {
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
            fontSize: "14px",
            textTransform: "none",
            letterSpacing: 0.5,
            lineHeight: 1.2,
            fontWeight: 400,
            // fontWeight: 500,
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
    },
    components: components,
})