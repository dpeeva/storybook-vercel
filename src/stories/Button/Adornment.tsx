import React from "react"
import { styled } from "@mui/material"
import { BaseSize } from "@/typings"

type AdornmentPosition = "start" | "end"

const AdornmentWrapper = styled("span")<{
    position: AdornmentPosition,
    size: BaseSize
}>(({ theme, position, size }) => ({
    position: "relative",
    top: "-1px",

    ...(size === "small" && {
        ...(position === "start" && {
            left: "-8px",
        }),
        ...(position === "end" && {
            right: "-8px",
        }),
    }),

    ...(size === "medium" && {
        ...(position === "start" && {
            left: "-10px",
        }),
        ...(position === "end" && {
            right: "-10px",
        }),
    }),

    ...(size === "large" && {
        ...(position === "start" && {
            left: "-12px",
        }),
        ...(position === "end" && {
            right: "-12px",
        }),
    }),
}))

interface Props extends React.PropsWithChildren {
    position: AdornmentPosition
    size: BaseSize
}

export const Adornment: React.FunctionComponent<Props> = ({ position, size, children }) => <AdornmentWrapper
    position={position}
    size={size}
>
    {children}
</AdornmentWrapper>