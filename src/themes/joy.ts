import { createTheme } from "@mui/material"
import { components } from "./components"

const fontFamily = {
    // fontFamily: ["Merriweather", "sans-serif"].join(", "),
}

export const joy = createTheme({
    palette: {
        mode: "light",
        // primary: {
        //     main: "#ED6286",
        //     contrastText: "#ffffff",
        // },
        // secondary: {
        //     main: "#55374B",
        //     dark: "#260e1e",
        // },
        // info: {
        //     main: "#6EC2CB",
        //     contrastText: "#fff",
        // },
        // error: {
        //     main: "#e93a30",
        // },
        // success: {
        //     main: "#689419",
        // },
        // warning: {
        //     main: "#ee7348",
        //     contrastText: "#fff",
        // },
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
            ...fontFamily,
            fontSize: "56px",
            lineHeight: 1.5,
            fontWeight: 600,
        },
        h2: {
            ...fontFamily,
            fontSize: "48px",
            lineHeight: 1.5,
            fontWeight: 600,
        },
        h3: {
            ...fontFamily,
            fontSize: "36px",
            lineHeight: 1.5,
            fontWeight: 600,
        },
        h4: {
            ...fontFamily,
            fontSize: "28px",
            lineHeight: 1.5,
            fontWeight: 700,
        },
        h5: {
            ...fontFamily,
            fontSize: "24px",
            lineHeight: 1.5,
            fontWeight: 700,
        },
        h6: {
            ...fontFamily,
            fontSize: "18px",
            lineHeight: 1.5,
            fontWeight: 700,
        },
        button: {
            fontSize: "14px",
            textTransform: "none",
            lineHeight: 1.2,
            fontWeight: 500,
        },
        subtitle1: {
            ...fontFamily,
            fontSize: "18px",
            lineHeight: 1.5,
            fontWeight: 600,
        },
        subtitle2: {
            ...fontFamily,
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
            ...fontFamily,
            fontSize: "14px",
            lineHeight: 1,
            fontWeight: 500,
        },
    },
    components: components,
})