import type { Meta, StoryFn } from "@storybook/react"
import { LinkProps } from "@mui/material"
import { MuiLink } from "../../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Base/Link",
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
    <MuiLink {...args} href="/">
        Линк
    </MuiLink>
)

export const Default = Template.bind({})
Default.args = {
    variant: "h5",
    color: "primary", // defaults to primary when not set
    underline: "hover",
}