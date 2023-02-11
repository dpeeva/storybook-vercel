import { Theme } from "@mui/material"
import { defaultDark, defaultLight, joy } from "../themes"

export type ThemeName = "joy" | "light" | "dark"
export type ThemeVariants = Record<ThemeName, Theme>

export const themes: ThemeVariants = {
    "joy": joy,
    "light": defaultLight,
    "dark": defaultDark
}

export type BaseColor = "primary" | "secondary" | "success" | "error" | "info" | "warning"

export type BaseSize = "small" | "medium" | "large"
export type BaseVariant = "text" | "outlined" | "contained"

export type TextTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "span" | "p"