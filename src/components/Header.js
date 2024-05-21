import { useState } from "react";
import { Link } from "react-router-dom";

import useOnlineStatus from "../../utils/customHooks/useOnlineStatus";

const Header = () => {
  const [auth, setAuth] = useState("login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between shadow-lg m-">
      {/* logo */}
      <div className="px-20">
        <img
          className="w-40"
          src="data:image/png;base64,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"
        ></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li>Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-10">
            <Link to="/">Home </Link>
          </li>
          <li className="px-10">
            <Link to="/about"> About </Link>
          </li>
          <li className="px-10">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-10">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-10">Cart</li>

          <button
            className="login px-10"
            onClick={() => {
              auth === "login" ? setAuth("logout") : setAuth("login");
            }}
          >
            {auth}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
