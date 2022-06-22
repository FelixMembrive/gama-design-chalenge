import searchIcon from "../../assets/icons/search.png"
import "./SearchBar.css"

export default function SearchBar() {
    return (
        <div className="search-bar">
            <div>
                <img src={searchIcon} />
                <input placeholder="search here for your product" value="" />
            </div>
        </div>
    )
}