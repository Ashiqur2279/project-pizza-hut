import React from "react"
import { Link } from "react-router-dom"
import ButtonForward from "../../ui/ButtonForward"
import CartItem from "./CartItem"

const fakeCart = [
    {
        pizzaId: 12,
        name: "Mediterranean",
        quantity: 2,
        unitPrice: 16,
        totalPrice: 32,
    },
    {
        pizzaId: 6,
        name: "Vegetale",
        quantity: 1,
        unitPrice: 13,
        totalPrice: 13,
    },
    {
        pizzaId: 11,
        name: "Spinach and Mushroom",
        quantity: 1,
        unitPrice: 15,
        totalPrice: 15,
    },
]

const Cart = () => {
    const cart = fakeCart
    return (
        <div className="ml-2 mt-2">
            {/* <Link to="/menu">
                <ButtonBackward btn_data={"Back to Menu"} />
            </Link> */}
            <Link
                to="/menu"
                className="text-sm font-semibold text-blue-500 hover:text-blue-700"
            >
                &larr;Back to Menu
            </Link>

            <h2 className="text-lg font-semibold">Your cart, %NAME%</h2>
            <ul className="my-4 divide-y-2 divide-gray-400 border-b-2 border-gray-400">
                {cart.map((cartItem) => (
                    <CartItem item={cartItem} key={cartItem.pizzaId} />
                ))}
            </ul>

            <div className="space-x-5">
                <Link to="/order/new">
                    <ButtonForward btn_data={"Order Pizzas"} />
                </Link>
                <button className="rounded-md border-2 border-orange-500 bg-transparent px-2 py-1 text-xl font-semibold tracking-wide transition-colors duration-300 hover:bg-red-400">
                    Clear cart
                </button>
            </div>
        </div>
    )
}

export default Cart
