import React from "react"
import { styled } from "@mui/material"

type AdornmentPosition = "start" | "end"

const AdornmentWrapper = styled("span")<{
    position: AdornmentPosition
}>(({ theme, position }) => ({
    position: "relative",
    top: "-1px",
    ...(position === "start" && {
        left: "-8px",
    }),
    ...(position === "end" && {
        right: "-8px",
    }),
}))

interface Props extends React.PropsWithChildren {
    position: AdornmentPosition
}

export const Adornment: React.FunctionComponent<Props> = ({ position, children }) => <AdornmentWrapper position={position}>
    {children}
</AdornmentWrapper>