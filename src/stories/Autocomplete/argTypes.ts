/* istanbul ignore file */

import { baseColors } from "../constants"

export const argTypes = {
    color: {
        options: baseColors,
        control: { type: "select" },
    },
    size: {
        options: ["small", "medium"],
        control: { type: "radio" },
    },
    multiple: {
        control: { type: "boolean" },
        table: { disable: true },
    },
    freeSolo: {
        control: { type: "boolean" },
        description: "If true, the Autocomplete is not bound to provided options.",
    },
    limitTags: {
        control: { type: "number" },
    },
    disablePortal: {
        control: { type: "boolean" },
        description: "If true, the Popper content will be under the DOM hierarchy of the parent component.",
    },
    disableClearable: {
        control: { type: "boolean" },
    },
    loading: {
        control: { type: "boolean" },
        description: "If true, the component is in a loading state. This shows the loadingText in place of suggestions (only if there are no suggestions to show, e.g. options are empty).",
        table: { disable: true },
    },
    loadingText: {
        control: { type: "boolean" },
        description: "Text to display when in a loading state.",
        table: { disable: true },
    },
    disabled: {
        type: "boolean",
    },
}