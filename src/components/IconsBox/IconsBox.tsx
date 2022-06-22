import IconLink from "../IconLink/IconLink"
import IconCheckout from "../../assets/icons/checkout.png"
import IconFavorites from "../../assets/icons/favorite.png"
import IconLocalization from "../../assets/icons/localization.png"
import IconProfile from "../../assets/icons/profile.png"

import "./IconsBox.css"

export default function IconsBox() {
    return (
        <div className="icons-box">
            <IconLink iconSrc={IconCheckout} />
            <IconLink iconSrc={IconFavorites} />
            <IconLink iconSrc={IconLocalization} />
            <IconLink iconSrc={IconProfile} />
        </div>
    )
}