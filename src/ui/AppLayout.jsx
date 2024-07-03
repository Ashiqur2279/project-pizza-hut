import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

const AppLayout = () => {
  const navigate = useNavigation();
  const isLoading = navigate.state === "loading";

  return (
    <div className="layout">
      <Header />
      <main>{isLoading ? <Loader /> : <Outlet />}</main>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
