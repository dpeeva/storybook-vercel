import { MuiAccordionDetails, MuiAccordionSummary, MuiBox, MuiList, MuiListItem, MuiTypography } from "../../../mui"
import { styled } from "@mui/system"


export const Summary = styled(MuiAccordionSummary)({
    paddingLeft: "36px",
    minHeight: "62px",
    "&.Mui-expanded": {
        minHeight: "62px",
    },
})

export const Title = styled(MuiTypography)({
    display: "flex",
    alignContent: "center",
    alignItems: "center",
}) as typeof MuiTypography

export const Settings = styled(MuiBox)({
    flexGrow: 1,
    textAlign: "right",
})

export const TogglesWrap = styled(MuiBox)({
    display: "inline-block",
    marginLeft: "16px",
    width: "270px",
})

export const Details = styled(MuiAccordionDetails)({
    padding: 0,
})

export const NestedSummary = styled(MuiAccordionSummary)({
    paddingLeft: "96px",
    minHeight: "62px",
    "&.Mui-expanded": {
        minHeight: "62px",
    },
})

export const NestedDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: 0,
    backgroundColor: theme.palette.background.paper
}))

export const DetailsList = styled(MuiList)({
    padding: "0 0 0 142px",
})

export const DetailsListItem = styled(MuiListItem)({
    paddingLeft: "8px",
    minHeight: "64px",
})