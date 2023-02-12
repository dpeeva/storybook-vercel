import { createTheme } from "@mui/material"
import { components } from "./styles"
import { palette } from "./palette"
import { typography } from "./typography"
import { spacing } from "./spacing"

export const joy = createTheme({
    mode: "joy",
    palette: palette,
    typography: typography,
    components: components,
    spacing: spacing,
    shape: {
        borderRadius: 0,
    },
})