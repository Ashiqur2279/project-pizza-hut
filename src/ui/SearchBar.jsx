import { useEffect, useState } from "react"
import { FaSearch } from "react-icons/fa"

const SearchBar = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [showInput, setShowInput] = useState(false)

    //function to handle screen size
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 640) //tailwind's sm breakpoint sm breakpoint is 640px;
    }

    //check screen size on initial load on resize
    useEffect(() => {
        handleResize()
        window.addEventListener("resize", handleResize) //add resize event listener
        return () => window.removeEventListener("resize", handleResize) //cleanup event listener on unmount
    }, [])
    return (
        <div className="flex items-center">
            {isMobile ? (
                showInput ? (
                    <input
                        type="text"
                        placeholder="Search your order id"
                        className="rounded-md border p-2 text-black"
                        onBlur={() => setShowInput(false)} //hide input when it loses focus
                    />
                ) : (
                    <FaSearch
                        className="cursor-pointer text-xl"
                        onClick={() => setShowInput(true)}
                    />
                )
            ) : (
                <div className="flex items-center rounded-md border p-2">
                    <FaSearch className="mr-2" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="text-black outline-none"
                    />
                </div>
            )}
        </div>
    )
}

export default SearchBar
