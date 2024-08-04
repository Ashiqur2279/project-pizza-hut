import React, { useState } from "react"

const CreateUser = () => {
    const [username, setUsername] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center gap-2 sm:flex-row"
        >
            <p className="font basis-auto text-lg font-medium">
                Start Order by telling your name:
            </p>

            <input
                type="text"
                placeholder="Your full name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-3/4 rounded-md px-3 py-1.5 ring ring-gray-400 ring-offset-2"
            />
        </form>
    )
}

export default CreateUser
