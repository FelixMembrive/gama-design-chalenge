import searchIcon from "../../assets/icons/search.png"
import { SearchBarStyled } from "./style"
// import "./SearchBar.css"

export default function SearchBar() {
    return (
        <SearchBarStyled>
            <img src={searchIcon} />
            <input placeholder="search here for your product" />
        </SearchBarStyled>

    )
}