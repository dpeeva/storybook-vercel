export type Item = {
    name: string
    checked: boolean
    value: number
    text: string
}

export const items: Item[] = [
    { name: "Fantasy", checked: true, value: 10, text: "Fantasy" },
    { name: "History", checked: false, value: 20, text: "History" },
    { name: "Romance", checked: false, value: 30, text: "Romance" },
    { name: "Biographical", checked: false, value: 40, text: "Biographical" },
    { name: "Classical", checked: false, value: 50, text: "Classical" },
    { name: "Psychology", checked: false, value: 60, text: "Psychology" },
    { name: "Philosophy", checked: false, value: 70, text: "Philosophy" },
    { name: "Science", checked: false, value: 80, text: "Science" },
    { name: "Esoterics", checked: false, value: 90, text: "Esoterics" },
]