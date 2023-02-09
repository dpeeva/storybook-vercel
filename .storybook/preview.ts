import { themes } from "../src/typings"
import { withMuiTheme } from "./with-mui-theme.decorator"

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    backgrounds: {
        default: "light",
        values: [
            {
                name: "light",
                value: "#fff",
            },
            {
                name: "dark",
                value: "#181818",
            }
        ]
    },
}

export const argTypes = {
    mode: {
        options: Object.keys(themes),
        control: { type: "radio" },
        table: { disable: true },
    }
}

export const args = { mode: "joy" }

export const decorators = [
    withMuiTheme,
]