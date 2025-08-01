import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Usercontext from "../utils/Usercontext";
import { useSelector } from "react-redux";

const Header = () => {
  const [updata, setupdata] = useState("Login");

  const { loggedInUser } = useContext(Usercontext); // this will get the value from the context

  const onlineStatus = useOnlineStatus();

  const cartitems = useSelector((store)=>store.cart.items)
  console.log("cartitems", cartitems);
  
  return (
    <div className="flex justify-between p-5 bg-blue-300">
      <div className="logo">
        <img
          height={50}
          width={50}
          src="https://imgs.search.brave.com/_zsDGMcQDExIcq27uuVEBJ87h5lyuKiiJoElJ6MKXCE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Z3JhZGllbnQtcmVz/dGF1cmFudC1sb2dv/LWRlc2lnbl8yMy0y/MTUxMjU3MDMyLmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDA"
        ></img>
      </div>
      <div className="nav-item">
        <ul className="flex gap-10 px-2 py-3 text-xl text-center">
          <li> {onlineStatus ? "Online ✅" : "Offline ❌"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li> 
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="">
            <Link to="/cart">🛒{cartitems.length} Items</Link>
          </li>

          <button
            className="Login-btn"
            onClick={() => {
              updata === "Login" ? setupdata("Logout") : setupdata("Login");
            }}
          >
            {updata}
          </button>

          <li className="px-4 text-xl">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
