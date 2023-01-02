import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import flag from "../../Assets/img/flag.png";
import logo from "../../Assets/img/AMZN_BIG.D.png";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useStateValue } from "../StateProvider/StateProvider";
import { auth } from "../../firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <>
      <div className="header">
        <div className="header_logo">
          <Link className="header_logo_image" to="/">
            <img src={logo} alt="Amazon" />
          </Link>
        </div>
        <div className="header_addres">
          <div className="nav-location">
            <LocationOnOutlinedIcon className="nav-location-icon" />
          </div>
          <div className="nav-address-text">
            <span className="nav-line-1">Hello</span>

            <span className="nav-line-2">Select your address</span>
          </div>
        </div>

        <div className="header_search">
          <select className="search-all">
            <option value="Apple">All</option>
            <option value="Apple">Apple</option>
            <option value="Mango">Mango</option>
            <option value="Pineapple">Pineapple</option>
            <option value="Papaya">Papaya</option>
          </select>
          <input className="searchInput" type="text"></input>{" "}
          <SearchIcon className="search-icon" />
        </div>
        <div className="header_lang">
          <select className="header_lang_list">
            <option value="en">EN</option>
            <option value="Apple">spanish</option>
            <option value="Mango">amharic</option>
          </select>
        </div>
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_sign_in">
            <span className="header_signin_hello">
              Hello,{!user ? "Guest" : user.email}
            </span>
            <span className="Acounts-list">
              {user ? "sign aut" : "sign in"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header_retur_orders">
            <span className="returns-link" href="/">
              <span className="retunrs">Returs</span>
            </span>
            <span href="/">
              <span className="orders">& Orders</span>
            </span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header_cart">
            {/* <a className="cart_link" href="/cart"> */}
            <AddShoppingCartIcon className="cart" />
            <span> {basket.length}</span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Header;
