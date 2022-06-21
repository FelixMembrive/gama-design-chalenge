import "./styles.css"

type BoxProps = {
    background?: string;
    height?: string
    children: JSX.Element
}

export default function Box(props:BoxProps) {
    return (
        <section className={`box gray-background`}>
            {props.children}
        </section >
    )
}