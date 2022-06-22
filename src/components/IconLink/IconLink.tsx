import { Link } from "react-router-dom"

type IconLinkProps = {
    iconSrc: string
    redirect: string
}

export default function IconLink(props: IconLinkProps) {
    return (
        <div>
            <Link to={props.redirect}>
                <img src={props.iconSrc} />
            </Link>
        </div>
    )
}