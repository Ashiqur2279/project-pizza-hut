import { Link } from "react-router-dom"
import ButtonForward from "../../ui/ButtonForward"

const CartOverview = () => {
    return (
        <div className="bg-stone-400 p-10 text-center">
            <p className="m-2 space-x-5">
                <span className="text-xl font-medium">23 pizzas</span>
                <span className="text-xl font-medium">$23.45</span>
            </p>

            <Link to="/cart">
                <ButtonForward btn_data={"Open Cart"} />
            </Link>
        </div>
    )
}

export default CartOverview
