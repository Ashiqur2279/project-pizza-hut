import { formatCurrency } from "../../utils/helpers"

function MenuItem({ pizza }) {
    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza

    return (
        <li className="m-2 flex items-center rounded-md border-2 border-red-500 p-2">
            <div className="flex size-52 flex-1 items-center justify-center overflow-hidden rounded-md">
                <img
                    src={imageUrl}
                    alt={name}
                    className="transform rounded-md transition-transform duration-500 hover:scale-110"
                />
            </div>
            <div className="flex-1 p-2">
                <p className="text-xl font-bold">{name}</p>
                <p>{ingredients.join(", ")}</p>
                <div>
                    {!soldOut ? (
                        <p>{formatCurrency(unitPrice)}</p>
                    ) : (
                        <p>Sold Out</p>
                    )}
                </div>
            </div>
        </li>
    )
}

export default MenuItem
