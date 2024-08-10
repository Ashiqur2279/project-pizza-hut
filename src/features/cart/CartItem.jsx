import MyButton from "../../ui/MyButton"
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

            <MyButton type="small">Delete</MyButton>
        </li>
    )
}

export default CartItem
