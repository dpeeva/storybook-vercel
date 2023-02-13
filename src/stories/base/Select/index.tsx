import { styled } from "@mui/system"

export const items = [
    { checked: true, value: 10, text: "Десет" },
    { checked: false, value: 20, text: "Двадесет" },
    { checked: false, value: 30, text: "Тридесет" },
    { checked: false, value: 40, text: "Четиридесет" },
    { checked: false, value: 50, text: "Петдесет" },
    { checked: false, value: 60, text: "Шестдесет" },
    { checked: false, value: 70, text: "Седемдесет" },
    { checked: false, value: 80, text: "Осемдесет" },
    { checked: false, value: 90, text: "Деветдесет" },
]

export const itemsLong = [
    { checked: true, value: 10, text: "Lorem Ipsum е елементарен примерен текст, използван в печатарската и типографската индустрия" },
    { checked: false, value: 20, text: "Lorem Ipsum е елементарен примерен текст, използван в печатарската и типографската индустрия" },
    { checked: false, value: 30, text: "Lorem Ipsum е елементарен примерен текст, използван в печатарската и типографската индустрия" },
    { checked: false, value: 40, text: "Четиридесет" },
    { checked: false, value: 50, text: "Петдесет" },
    { checked: false, value: 60, text: "Шестдесет" },
    { checked: false, value: 70, text: "Седемдесет" },
    { checked: false, value: 80, text: "Осемдесет" },
    { checked: false, value: 90, text: "Деветдесет" },
]

export type ComplexItem = {
    checked: boolean
    value: ComplexValue
    text: string
}

export type ComplexValue = {
    name: string
    count: number
}

export const complexItems = [
    {
        checked: true,
        value: {
            name: "ten",
            count: 10
        },
        text: "Ten"
    },
    {
        checked: false,
        value: {
            name: "ten",
            count: 20
        },
        text: "Twenty"
    },
    {
        checked: false,
        value: {
            name: "ten",
            count: 30
        },
        text: "Thirty"
    },
    {
        checked: false,
        value: {
            name: "ten",
            count: 40
        },
        text: "Fourty"
    },
    {
        checked: false,
        value: {
            name: "ten",
            count: 50
        },
        text: "Fifty"
    },
    {
        checked: false,
        value: {
            name: "ten",
            count: 60
        },
        text: "Sixty"
    },
    {
        checked: false,
        value: {
            name: "ten",
            count: 70
        },
        text: "Seventy"
    },
    {
        checked: false,
        value: {
            name: "ten",
            count: 80
        },
        text: "Eighty"
    },
    {
        checked: false,
        value: {
            name: "ten",
            count: 90
        },
        text: "Ninety"
    },
]

export const LongTextSingleLine = styled("span")({
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
})

export const LongTextMultiLine = styled("span")({
    // padding: "2px 0",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "normal",
})