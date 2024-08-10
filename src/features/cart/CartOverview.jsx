import { Link } from "react-router-dom"
import MyButton from "../../ui/MyButton"

const CartOverview = () => {
    return (
        <div className="flex justify-between bg-stone-400 p-4 text-center">
            <p className="m-2 space-x-5">
                <span className="text-xl font-medium">23 pizzas</span>
                <span className="text-xl font-medium">$23.45</span>
            </p>

            <Link to="/cart">
                <MyButton type="primary">Open Cart&rarr;</MyButton>
            </Link>
        </div>
    )
}

export default CartOverview
