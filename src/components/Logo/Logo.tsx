type IconLogoProps = {
    logoSrc?: string
    text?: string
    redirect?: string
}
export default function Logo (props: IconLogoProps){
    return (
        <>
        <img src={props.logoSrc} />
        <a href={props.redirect}>{props.text}</a>
        </>
    )
}