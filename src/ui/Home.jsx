import CreateUser from "../features/user/CreateUser"

const Home = () => {
    return (
        <div className="flex flex-col gap-4 bg-stone-400 p-10">
            <h1 className="py-2 text-center text-6xl font-bold">
                <span className="text-blue-600">Pizza Hut</span> <br />
                The Perfect Slice for Every Occasion.
            </h1>
            <CreateUser />
        </div>
    )
}

export default Home
