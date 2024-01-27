import { FaOpencart } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="Topnav flex-between">
          <span>Welcome to test & get the best product</span>
          <span>27th, January 2024</span>
        </div>

        <div className="Midnav flex-between">
          <a href="#">
            Test<span>.</span>
          </a>
          <FaOpencart className="nav_icon" />
        </div>
        <div className="Mainnav">
          <span>nav-item</span>
          <span>nav-item</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
