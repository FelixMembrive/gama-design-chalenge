import Logo from "../Logo/Logo";
import IconLink from "../IconLink/IconLink";
import SearchBar from "../SearchBar/SearchBar";
import IconsBox from "../IconsBox/IconsBox";


import LogoHorizontal from "../../assets/logos/logo-horizontal.png"

import "./Header.css"




export default function Header() {
    return (
            <header>
                <Logo  logoSrc={LogoHorizontal}/>
                <SearchBar/>
                <IconsBox/>
            </header>
    )
}