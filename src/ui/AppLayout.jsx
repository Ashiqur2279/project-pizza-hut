import { Outlet, useNavigation } from "react-router-dom"
import CartOverview from "../features/cart/CartOverview"
import Footer from "./Footer"
import Header from "./Header"
import Loader from "./Loader"

const AppLayout = () => {
    const navigate = useNavigation()
    const isLoading = navigate.state === "loading"

    return (
        // <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
        //     <Header />
        //     <main className="overflow-auto">
        //         {isLoading ? <Loader /> : <Outlet />}
        //     </main>
        //     <div className="grid grid-rows-2">
        //         <CartOverview />
        //         <Footer />
        //     </div>
        // </div>
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="scrollbar-thin scrollbar-thumb-gray-400 flex-grow overflow-auto">
                {isLoading ? <Loader /> : <Outlet />}
            </main>
            <div className="">
                <CartOverview />
                <Footer />
            </div>
        </div>
    )
}

export default AppLayout
