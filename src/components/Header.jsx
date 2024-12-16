import { Link } from "react-router-dom";
import LOGO_URL from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnClk, setBtnClk] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-orange-500 shadow-xl ">
      <div className="logo-container">
        <Link to="/">
          <img className="w-40" src={LOGO_URL} />
        </Link>
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">Cart</li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="px-4"
            onClick={() => {
              btnClk == "Login" ? setBtnClk("Logout") : setBtnClk("Login");
            }}
          >
            {btnClk}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;