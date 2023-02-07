import type { Meta, StoryFn } from "@storybook/react"
import { mui } from "../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Typography",
    component: mui.Typography,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
        variant: {
            table: { disable: true },
        },
        fontWeight: {
            table: { disable: true },
        },
    },
} as Meta


const Template: StoryFn = (args: mui.TypographyProps) => (
    <mui.Stack direction={"column"} spacing={3} py={2}>
        <mui.Typography variant="h1" {...args}>
            h1. Заглавие на каталога
        </mui.Typography>
        <mui.Typography variant="h2" {...args}>
            h2. Заглавие на каталога
        </mui.Typography>
        <mui.Typography variant="h3" {...args}>
            h3. Заглавие на каталога
        </mui.Typography>
        <mui.Typography variant="h4" {...args}>
            h4. Заглавие на каталога
        </mui.Typography>
        <mui.Typography variant="h5" {...args}>
            h5. Заглавие на каталога
        </mui.Typography>
        <mui.Typography variant="h6" {...args}>
            h6. Заглавие на каталога
        </mui.Typography>
        <mui.Typography variant="subtitle1" {...args}>
            subtitle1. Заглавие на каталога - Mapped by default to h6
        </mui.Typography>
        <mui.Typography variant="subtitle2" {...args}>
            subtitle2. Заглавие на каталога - Mapped by default to h6
        </mui.Typography>
        <mui.Typography {...args}>
            body1. Това е поредица от латински думи които, както са позиционирани , не образувайте изречения с пълен смисъл, а дайте живот на тестов текст, полезен за запълване на пространства, които впоследствие ще бъдат заети от ad hoc текстове, съставени от комуникационни специалисти.
        </mui.Typography>
        <mui.Typography variant="body2" {...args}>
            body2. Това е поредица от латински думи които, както са позиционирани , не образувайте изречения с пълен смисъл, а дайте живот на тестов текст, полезен за запълване на пространства, които впоследствие ще бъдат заети от ad hoc текстове, съставени от комуникационни специалисти.
        </mui.Typography>
        <mui.Typography variant="button" {...args}>
            Текст върху бутон
        </mui.Typography>
        <mui.Typography variant="caption" {...args}>
            Пояснителен текст
        </mui.Typography>
        <mui.Typography variant="overline" {...args}>
            Текст под линия
        </mui.Typography>
    </mui.Stack>
)

export const All = Template.bind({})
All.args = {
    align: "inherit",
    // fontWeight: 400,
    gutterBottom: false,
    noWrap: false,
    paragraph: false,
}