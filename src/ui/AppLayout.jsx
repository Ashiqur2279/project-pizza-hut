import { Outlet, useNavigation } from "react-router-dom"
import CartOverview from "../features/cart/CartOverview"
import Footer from "./Footer"
import Header from "./Header"
import Loader from "./Loader"

const AppLayout = () => {
    const navigate = useNavigation()
    const isLoading = navigate.state === "loading"

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">
                {isLoading ? <Loader /> : <Outlet />}
            </main>
            <CartOverview />
            <Footer />
        </div>
    )
}

export default AppLayout
