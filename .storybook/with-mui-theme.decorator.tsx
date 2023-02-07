import * as React from "react"
import { mui } from "../src/mui"
import { light, dark, joy } from "../src/themes"

const THEMES = {
    light,
    dark,
    joy
}

export const withMuiTheme = (Story, context) => {
    const { theme: themeKey } = context.globals
    const theme = React.useMemo(() => THEMES[themeKey] || THEMES["light"], [themeKey])

    return <mui.ThemeProvider theme={theme}>
        <mui.CssBaseline>
            <mui.Box sx={{ padding: "20px", color: "red" }}>
                <Story />
            </mui.Box>
        </mui.CssBaseline>
    </mui.ThemeProvider>
}