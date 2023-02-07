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
        options: ["joy", "light", "dark"],
        control: { type: "radio" }
    }
}

export const args = { mode: "joy" }

export const decorators = [
    withMuiTheme,
]

export const globalTypes = {
    theme: {
        name: "Theme",
        title: "Theme",
        description: "Theme for your components",
        defaultValue: "joy",
        toolbar: {
            icon: "paintbrush",
            dynamicTitle: true,
            items: [
                { value: "light", left: "☀️", title: "Light mode" },
                { value: "dark", left: "🌙", title: "Dark mode" },
                { value: "joy", left: "🐠", title: "Joy mode" },
            ],
        },
    },
}