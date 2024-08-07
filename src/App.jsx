import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./features/cart/Cart";
import CartItem from "./features/cart/CartItem";
import CartOverview from "./features/cart/CartOverview";
import EmptyCart from "./features/cart/EmptyCart";
import Menu, { menuLoader } from "./features/menu/Menu";
// import MenuItem from "./features/menu/MenuItem";
import CreateOrder, { createOrderAction } from "./features/order/CreateOrder";
import Order, { orderLoader } from "./features/order/Order";
import CreateUser from "./features/user/CreateUser";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Home from "./ui/Home";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
      },

      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/cartItem",
        element: <CartItem />,
      },
      {
        path: "/cartOverview",
        element: <CartOverview />,
      },
      {
        path: "/emptyCart",
        element: <EmptyCart />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
      {
        path: "/user",
        element: <CreateUser />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
