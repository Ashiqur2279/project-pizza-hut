import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"

const Header = () => {
    return (
        <header className="flex items-center justify-between bg-red-600 px-4 py-4 text-white">
            <Link className="text-4xl font-semibold" to="/">
                The Pizza Hut
            </Link>
            {/* <SearchOrder /> */}
            <SearchBar />
        </header>
    )
}

export default Header
