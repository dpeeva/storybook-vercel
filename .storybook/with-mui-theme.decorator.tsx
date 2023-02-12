import * as React from "react"
import { mui } from "../src/mui"
import { themes } from "../src/typings"

export const withMuiTheme = (Story, context) => {
    const { theme: themeKey } = context.globals
    const theme = React.useMemo(() => themes[themeKey] || themes["joy"], [themeKey])

    return <mui.ThemeProvider theme={theme}>
        <mui.CssBaseline>
            <mui.Box sx={{ padding: "20px", color: "red" }}>
                <Story />
            </mui.Box>
        </mui.CssBaseline>
    </mui.ThemeProvider>
}