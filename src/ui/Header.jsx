import { Link } from "react-router-dom"
import SearchOrder from "./SearchOrder"

const Header = () => {
    return (
        <header className="flex items-center justify-between bg-red-600 px-4 py-8 text-white">
            <Link className="text-4xl font-semibold" to="/">
                The Pizza Hut
            </Link>
            <SearchOrder />
        </header>
    )
}

export default Header
