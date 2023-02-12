import * as React from "react"
import { MuiBox, MuiCssBaseline, MuiThemeProvider } from "../src/mui"
import { themes } from "../src/typings"

export const withMuiTheme = (Story, context) => {
    const { theme: themeKey } = context.globals
    const theme = React.useMemo(() => themes[themeKey] || themes["joy"], [themeKey])

    return <MuiThemeProvider theme={theme}>
        <MuiCssBaseline>
            <MuiBox sx={{ padding: "20px", color: "red" }}>
                <Story />
            </MuiBox>
        </MuiCssBaseline>
    </MuiThemeProvider>
}