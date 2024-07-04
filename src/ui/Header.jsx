import { Link } from "react-router-dom";
import SearchOrder from "./SearchOrder";

const Header = () => {
  return (
    <header>
      <Link to="/">The Pizza Hut</Link>
      <SearchOrder />
    </header>
  );
};

export default Header;
