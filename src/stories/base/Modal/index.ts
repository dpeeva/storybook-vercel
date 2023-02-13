import { alpha, styled } from "@mui/system"
import { MuiBox, MuiFormLabel, MuiToggleButton } from "../../../mui"

export const FormRow = styled(MuiBox)(
    ({ theme }) => ({
        flexGrow: 1,
        borderBottom: `1px solid ${alpha(theme.palette.common.white, 0.10)}`,
        paddingTop: "16px",
        paddingBottom: "16px",

        "&.centered": {
            display: "flex",
            alignItems: "center",
        }
    })
)

export const FormLabel = styled(MuiFormLabel)({
    flexGrow: 1,
})

export const FormToggleButton = styled(MuiToggleButton)({
    width: "48px",
})

export const ModalContentWrapper = styled(MuiBox)({
    paddingTop: "5px",

    [`${FormRow}:first-child`]: {
        paddingTop: 0,
    },

    [`${FormRow}:last-child`]: {
        borderBottom: "none",
        paddingBottom: "24px",
    }
})

export const ModalFooterWrapper = styled(MuiBox)({
    overflowY: "scroll",
    maxHeight: "100px",
})

export type Item = {
    selected: boolean
    value: number
    text: string
}

export const zones: Item[] = [
    {
        selected: true,
        value: 10,
        text: "(GMT+02:00 20:43) Helsinki, Kiev, Riga, Sofia, Tallin, Vilnius",
    },
]

export const currencies = [
    { selected: false, value: 1, text: "Pound - GBP" },
    { selected: false, value: 2, text: "Euro - EUR" },
    { selected: false, value: 3, text: "Dollar - USD" },
]

export const odds = [
    { selected: false, value: 1, text: "European" },
    { selected: false, value: 2, text: "American" },
    { selected: false, value: 3, text: "Decimal" },
]