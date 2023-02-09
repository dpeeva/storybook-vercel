import { createTheme } from "@mui/material"
import { components } from "./components"
import { palette } from "./palette"
import { typography } from "./typography"

export const joy = createTheme({
    palette: palette,
    typography: typography,
    components: components,
})