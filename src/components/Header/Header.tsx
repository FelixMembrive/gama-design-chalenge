import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import IconsBox from "../IconsBox/IconsBox";
import {HeaderStyled} from "./style"

import LogoHorizontal from "../../assets/logos/logo-horizontal.png"

// import "./Header.css"

export default function Header() {
    return (
        <HeaderStyled>
            <Logo logoSrc={LogoHorizontal} />
            <SearchBar />
            <IconsBox />
        </HeaderStyled>
    )
}