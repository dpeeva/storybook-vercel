import type { Meta, StoryFn } from "@storybook/react"
import { ExpandMore } from "@mui/icons-material"
import { MuiAccordion, MuiAccordionDetails, MuiAccordionSummary, MuiTypography } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Collection/Accordion",
    component: MuiAccordion,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: argTypes,
} as Meta

const Template: StoryFn = (args) => (
    <MuiAccordion {...args} sx={{ maxWidth: "450px" }}>
        <MuiAccordionSummary
            expandIcon={<ExpandMore />}
        >
            <MuiTypography variant="h5">Заглавие</MuiTypography>
        </MuiAccordionSummary>

        <MuiAccordionDetails>
            <MuiTypography>
                Lorem Ipsum е елементарен примерен текст, използван в печатарската и типографската индустрия. Lorem Ipsum е индустриален стандарт от около 1500 година, когато неизвестен печатар взема няколко печатарски букви и ги разбърква, за да напечата с тях книга с примерни шрифтове. Този начин не само е оцелял повече от 5 века, но е навлязъл и в публикуването на електронни издания като е запазен почти без промяна. Популяризиран е през 60те години на 20ти век със издаването на Letraset листи, съдържащи Lorem Ipsum пасажи, популярен е и в наши дни във софтуер за печатни издания като Aldus PageMaker, който включва различни версии на Lorem Ipsum.
            </MuiTypography>
        </MuiAccordionDetails>
    </MuiAccordion>
)

export const Default = Template.bind({})
Default.args = {
    square: false,
    disableGutters: true,
    disabled: false,
}