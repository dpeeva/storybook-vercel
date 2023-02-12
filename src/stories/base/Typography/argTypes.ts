export const argTypes = {
    variant: {
        options: ["h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit"],
        control: { type: "select" },
    },
    align: {
        options: ["left", "right", "center", "justify", "inherit"],
        control: { type: "select" },
    },
    fontWeight: {
        options: ["initial", 300, 400, 500, 700],
        control: { type: "select" },
    },
    gutterBottom: {
        control: { type: "boolean" },
    },
    noWrap: {
        control: { type: "boolean" },
    },
    paragraph: {
        control: { type: "boolean" },
    },
}