import type { Meta, StoryFn } from "@storybook/react"
import { TypographyProps } from "@mui/material"
import { MuiStack, MuiTypography } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Typography",
    component: MuiTypography,
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


const Template: StoryFn = (args: TypographyProps) => (
    <MuiStack direction={"column"} spacing={3} py={2}>
        <MuiTypography variant="h1" {...args}>
            h1. Заглавие на каталога
        </MuiTypography>
        <MuiTypography variant="h2" {...args}>
            h2. Заглавие на каталога
        </MuiTypography>
        <MuiTypography variant="h3" {...args}>
            h3. Заглавие на каталога
        </MuiTypography>
        <MuiTypography variant="h4" {...args}>
            h4. Заглавие на каталога
        </MuiTypography>
        <MuiTypography variant="h5" {...args}>
            h5. Заглавие на каталога
        </MuiTypography>
        <MuiTypography variant="h6" {...args}>
            h6. Заглавие на каталога
        </MuiTypography>
        <MuiTypography variant="subtitle1" {...args}>
            subtitle1. Заглавие на каталога - Mapped by default to h6
        </MuiTypography>
        <MuiTypography variant="subtitle2" {...args}>
            subtitle2. Заглавие на каталога - Mapped by default to h6
        </MuiTypography>
        <MuiTypography {...args}>
            body1. Това е поредица от латински думи които, както са позиционирани , не образувайте изречения с пълен смисъл, а дайте живот на тестов текст, полезен за запълване на пространства, които впоследствие ще бъдат заети от ad hoc текстове, съставени от комуникационни специалисти.
        </MuiTypography>
        <MuiTypography variant="body2" {...args}>
            body2. Това е поредица от латински думи които, както са позиционирани , не образувайте изречения с пълен смисъл, а дайте живот на тестов текст, полезен за запълване на пространства, които впоследствие ще бъдат заети от ad hoc текстове, съставени от комуникационни специалисти.
        </MuiTypography>
        <MuiTypography variant="button" {...args}>
            Текст върху бутон
        </MuiTypography>
        <MuiTypography variant="caption" {...args}>
            Пояснителен текст
        </MuiTypography>
        <MuiTypography variant="overline" {...args}>
            Текст под линия
        </MuiTypography>
    </MuiStack>
)

export const All = Template.bind({})
All.args = {
    align: "inherit",
    // fontWeight: 400,
    gutterBottom: false,
    noWrap: false,
    paragraph: false,
}