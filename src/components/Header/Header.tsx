import Logo from "../Logo/Logo";
import IconLink from "../IconLink/IconLink";
import SearchBar from "../SearchBar/SearchBar";

import IconCheckout from "../../assets/icons/checkout.png"
import IconFavorites from "../../assets/icons/favorite.png"
import IconLocalization from "../../assets/icons/localization.png"
import IconProfile from "../../assets/icons/profile.png"
import LogoHorizontal from "../../assets/logos/logo-horizontal.png"

import "./Header.css"



export default function Header() {
    return (
            <header>
                <Logo  logoSrc={LogoHorizontal}/>
                <IconLink  iconSrc={IconCheckout}/>
                <IconLink  iconSrc={IconFavorites}/>
                <IconLink  iconSrc={IconLocalization}/>
                <IconLink  iconSrc={IconProfile}/>
                <SearchBar/>
            </header>
    )
}