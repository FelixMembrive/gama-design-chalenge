// import "./Logo.css"
import { LogoStyled } from "./style"


type IconLogoProps = {
    logoSrc?: string
    text?: string
    redirect?: string
}

export default function Logo(props: IconLogoProps) {
    return (
        <LogoStyled className="horizontal-logo">
            <img src={props.logoSrc} />
            <a href={props.redirect}>{props.text}</a>
        </LogoStyled>
    )
}