import { Theme } from "@mui/material"
import { dark, light, joy } from "../themes"

export type ThemeName = "joy" | "light" | "dark"
export type ThemeVariants = Record<ThemeName, Theme>

export const themes: ThemeVariants = {
    "joy": joy,
    "light": light,
    "dark": dark
}

export type BaseColor = "primary" | "secondary" | "success" | "error" | "info" | "warning"