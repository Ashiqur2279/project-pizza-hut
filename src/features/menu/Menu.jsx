import { useLoaderData } from "react-router-dom"
import { getMenu } from "../../services/apiRestaurants"
import MenuItem from "./MenuItem"

const Menu = () => {
    const menu = useLoaderData()
    // console.log(menu);
    const pizzaMenu = menu.data
    // console.log(pizzaMenu);
    return (
        <div>
            <h1 className="m-4 text-center text-2xl font-bold underline">
                Pizza Menu
            </h1>
            <ul>
                {pizzaMenu.map((pizza) => (
                    <MenuItem pizza={pizza} key={pizza.id} />
                ))}
            </ul>
        </div>
    )
}

// export const menuLoader = async () => {
//   const menuData = await getMenu();
//   return menuData;
// };

export async function menuLoader() {
    const menuData = await getMenu()
    return menuData
}

export default Menu
