import "./Header.css";
import { getCurrentDate } from "../../Helper/dateHelper";
import { CiShoppingCart } from "react-icons/ci";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const currentDate = getCurrentDate();
  const location = useLocation();
  console.log(location);
  return (
    <header>
      <nav>
        <div className="top_nav">
          <span>Welcome to test</span>
          <span>{currentDate}</span>
        </div>
        <div className="mid_nav">
          <a href="/" className="logo">
            Test<span className="dot">.</span>
          </a>
          <div className="cart_toggler">
            <span className="cart_item_number">0</span>
            <CiShoppingCart className="nav_icon" />
          </div>
        </div>
        <div className="nav_section">
          <ul className="nav_items">
            <li className="nav_item">
              <NavLink
                to="/"
                className={`link ${location.pathname === "/" ? "active" : ""}`}
              >
                Home
              </NavLink>
            </li>
            <li className="nav_item">
              <NavLink
                to="/about"
                className={`link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
