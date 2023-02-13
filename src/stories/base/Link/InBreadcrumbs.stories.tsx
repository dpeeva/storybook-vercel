import type { Meta, StoryFn } from "@storybook/react"
import { LinkProps } from "@mui/material"
import { MuiBreadcrumbs, MuiLink, MuiTypography } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Collection/Link",
    component: MuiLink,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
    },
} as Meta

type Props = LinkProps & {
}

const Template: StoryFn = (args: Props) => (
    <MuiBreadcrumbs aria-label="breadcrumb">
        <MuiLink {...args} href="/">
            MUI
        </MuiLink>
        <MuiLink {...args} href="/">
            Core
        </MuiLink>
        <MuiTypography
            variant={args.variant}
            color="text.primary"
        >Текуща страница</MuiTypography>
    </MuiBreadcrumbs>
)

export const InBreadcrumbs = Template.bind({})
InBreadcrumbs.args = {
    variant: "body1",
    color: "primary", // defaults to primary when not set
    underline: "hover",
}