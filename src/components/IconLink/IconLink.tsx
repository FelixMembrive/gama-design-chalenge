type IconLinkProps = {
    iconSrc: string
    redirect?: string
}

export default function IconLink(props: IconLinkProps) {
    return (
        <div>
            <img src={props.iconSrc} />
            <a href={props.redirect}></a>
        </div>
    )
}