import { TextTypes } from "../../typings"

interface Props extends React.PropsWithChildren {
    textType: TextTypes
}

export const Typography: React.FunctionComponent<Props> = ({
    textType = "span",
    children
}) => {
    const Component = textType
    return <Component>
        {children}
    </Component>
}