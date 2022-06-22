import "./Logo.css"

type IconLogoProps = {
    logoSrc?: string
    text?: string
    redirect?: string
}

export default function Logo(props: IconLogoProps) {
    return (
        <div className="horizontal-logo">
            <img src={props.logoSrc} />
            <a href={props.redirect}>{props.text}</a>
        </div>
    )
}