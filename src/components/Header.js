import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

import useOnlineStatus from "../../utils/customHooks/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [auth, setAuth] = useState("login");
  const onlineStatus = useOnlineStatus();

  // subscribing to the store cart items
  const cartItems = useSelector((store) => store?.cart?.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between shadow-lg">
      {/* logo */}
      <img className="w-1/12 pl-20" src={logo}></img>
      <div className="font-bold justify-center text-4xl m-10 text-amber-900 font-mono">
        WakeN'Bite 🍕 - Start Fresh, Taste the Difference.
      </div>
      <div className="w-15"></div>
      <div className="flex items-center text-pink-800 font-serif font-semibold">
        <ul className="flex p-4 m-4 font-mono text-g">
          <li>Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-10">
            <Link to="/">Home 🏡</Link>
          </li>
          <li className="px-10">
            <Link to="/about"> About 👩🏻‍💻</Link>
          </li>
          <Link to="/cart">
            <li className="px-10">🛒 Cart - {cartItems.length}</li>
          </Link>
          <button
            className="login px-10"
            onClick={() => {
              auth === "login" ? setAuth("logout") : setAuth("login");
            }}
          >
            {auth} {auth === "login" ? " : 👩🏻🧑🏻" : ""}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
