import * as React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { TableCellProps, TableProps, TableRowProps } from "@mui/material"
import { MuiTable, MuiTableBody, MuiTableCell, MuiTableHead, MuiTableRow } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Collection/Table",
    component: MuiTable,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
        // Additional props:
        align: {
            options: ["inherit", "left", "right", "center", "justify"],
            control: { type: "select" },
        },
        hover: {
            control: { type: "boolean" },
        },
        selected: {
            control: { type: "boolean" },
        },
    },
} as Meta

type Props = TableProps & {
    align: TableCellProps["align"]
    hover: TableRowProps["hover"]
    selected: TableRowProps["selected"]
}

const Template: StoryFn = ({
    stickyHeader,
    padding,
    size,
    align,
    hover,
    selected
}) => (
    <MuiTable {...{ padding, size, stickyHeader }}>
        <MuiTableHead>
            {[1, 2, 3, 4, 5].map((_, i) => (
                <MuiTableCell
                    key={`th-cell-${i}`}
                    {...{ align, size, padding }}
                >Heading Cell</MuiTableCell>
            ))}
        </MuiTableHead>

        <MuiTableBody>
            {[1, 2, 3, 4, 5].map((_, i) => (
                <MuiTableRow
                    key={`row-${i}`}
                    {...{ hover, selected }}
                >
                    {[1, 2, 3, 4, 5].map((_, i) => (
                        <MuiTableCell
                            key={`cell-${i}`}
                            {...{ align, size, padding }}
                        >Cell</MuiTableCell>
                    ))}
                </MuiTableRow>
            ))}
        </MuiTableBody>
    </MuiTable>
)

export const Default = Template.bind({})
Default.args = {
    stickyHeader: false,
    padding: "normal",
    size: "medium",
    align: "left",
    hover: true,
    selected: false,
}