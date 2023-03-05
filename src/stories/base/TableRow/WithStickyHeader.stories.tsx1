import * as React from "react"
import type { Meta, StoryFn } from "@storybook/react"
import { TableCellProps, TableProps, TableRowProps } from "@mui/material"
import { MuiCheckbox, MuiTable, MuiTableBody, MuiTableCell, MuiTableContainer, MuiTableHead, MuiTableRow } from "../../../mui"
import { items } from "."
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
    <MuiTableContainer sx={{ maxHeight: "250px" }}>
        <MuiTable {...{ padding, size, stickyHeader }}>
            <MuiTableHead>
                <MuiTableCell
                    {...{ align, size, padding }}
                >
                    <MuiCheckbox />
                </MuiTableCell>
                {items.map((item, i) => (
                    <MuiTableCell
                        key={`th-cell-${i}`}
                        {...{ align, size, padding }}
                    >Heading Cell {item.content}</MuiTableCell>
                ))}
            </MuiTableHead>

            <MuiTableBody>
                {items.map((_, i) => (
                    <MuiTableRow
                        key={`row-${i}`}
                        {...{ hover }}
                        selected={i % 3 > 0 ? selected : !selected}
                    >
                        <MuiTableCell
                            {...{ align, size, padding }}
                        >
                            <MuiCheckbox />
                        </MuiTableCell>
                        {items.map((item, i) => (
                            <MuiTableCell
                                key={`cell-${i}`}
                                {...{ align, size, padding }}
                            >Cell {item.content}</MuiTableCell>
                        ))}
                    </MuiTableRow>
                ))}
            </MuiTableBody>
        </MuiTable>
    </MuiTableContainer>
)

export const WithStickyHeader = Template.bind({})
WithStickyHeader.args = {
    stickyHeader: true,
    padding: "normal",
    size: "medium",
    align: "left",
    hover: true,
    selected: false,
}