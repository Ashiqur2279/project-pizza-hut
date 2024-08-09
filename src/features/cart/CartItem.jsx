import { formatCurrency } from "../../utils/helpers"

const CartItem = ({ item }) => {
    const { pizzaId, name, quantity, totalPrice } = item
    return (
        <li className="flex items-center justify-between px-2">
            <div>
                <p>
                    <span className="mr-1 font-semibold">{quantity}</span>
                    &times; {name}
                </p>
                <div>
                    <p className="text-lg font-semibold">
                        {formatCurrency(totalPrice)}
                    </p>
                </div>
            </div>
            <button className="text-md rounded-lg border-2 border-orange-500 bg-yellow-400 px-2 py-1 font-semibold tracking-wide transition-colors duration-300 hover:bg-yellow-500">
                Delete
            </button>
        </li>
    )
}

export default CartItem
