import type { Meta, StoryFn } from "@storybook/react"
import { TypographyProps } from "@mui/material"
import { MuiStack, MuiTypography } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Collection/Typography",
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
        <MuiTypography {...args}>
            Lorem Ipsum е елементарен примерен текст, използван в печатарската и типографската индустрия. Lorem Ipsum е индустриален стандарт от около 1500 година, когато неизвестен печатар взема няколко печатарски букви и ги разбърква, за да напечата с тях книга с примерни шрифтове. Този начин не само е оцелял повече от 5 века, но е навлязъл и в публикуването на електронни издания като е запазен почти без промяна. Популяризиран е през 60те години на 20ти век със издаването на Letraset листи, съдържащи Lorem Ipsum пасажи, популярен е и в наши дни във софтуер за печатни издания като Aldus PageMaker, който включва различни версии на Lorem Ipsum.
        </MuiTypography>
        <MuiTypography variant="body2" {...args}>
            body2. Това е поредица от латински думи които, както са позиционирани , не образувайте изречения с пълен смисъл, а дайте живот на тестов текст, полезен за запълване на пространства, които впоследствие ще бъдат заети от ad hoc текстове, съставени от комуникационни специалисти.
        </MuiTypography>
        <MuiTypography variant="body2" {...args}>
            Известен факт е, че читателя обръща внимание на съдържанието, което чете, а не на оформлението му. Свойството на Lorem Ipsum е, че до голяма степен има нормално разпределение на буквите и се чете по-лесно, за разлика от нормален текст на английски език като "Това е съдържание, това е съдържание". Много системи за публикуване и редактори на Уеб страници използват Lorem Ipsum като примерен текстов модел "по подразбиране", поради което при търсене на фразата "lorem ipsum" в Интернет ще бъдат открити много сайтове в процес на разработка. Някой от тези сайтове биват променяни с времето, а други по случайност или нарочно(за забавление и пр.) биват оставяни в този си незавършен вид.
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