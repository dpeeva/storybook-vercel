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