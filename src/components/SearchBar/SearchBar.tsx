import searchIcon from "../../assets/icons/search.png"

export default function SearchBar() {
    return (
            <form action="" >
                <img src={searchIcon} />
                <input placeholder="search here for your product" value="" />
            </form>
    )
}