import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const SearchOrder = () => {
    const navigate = useNavigate()
    const [query, setQuery] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!query) return
        navigate(`/order/${query}`)
        setQuery("")
    }
    return (
        <div className="">
            <form className="w-7 sm:w-full" onSubmit={handleSubmit}>
                <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
                    <button className="absolute ml-3" type="submit">
                        <FaSearch className="size-5" />
                    </button>
                    <input
                        className="rounded-2xl border-none py-2 pl-10 pr-3 font-semibold text-black placeholder-gray-500 ring-2 ring-gray-300 focus:right-2 focus:ring-gray-500"
                        type="text"
                        placeholder="Input your order ID"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value)
                        }}
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchOrder
