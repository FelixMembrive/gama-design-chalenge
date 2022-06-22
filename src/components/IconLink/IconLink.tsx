type IconLinkProps = {
    iconSrc: string
    text?: string
    redirect?: string
}

export default function IconLink (props: IconLinkProps){
    return (
        <>
        <img src={props.iconSrc} />
        <a href={props.redirect}>{props.text}</a>
        </>
    )
}