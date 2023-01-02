import React from "react";
// import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import "./Nav.css";
function Nav() {
  return (
    <div className="nav">
      <div className="nav_first">
        <ul>
          <li className="list">
            <a className="all-list" href="/allitems">
              <MenuIcon className="menu-icon" />
            </a>
          </li>
          <li>
            <a href="/merryholid" className="list">
              Very Merry Deals
            </a>
          </li>
          <li>
            <a href="/merryholid" className="list">
              Holidays Gift Guide
            </a>
          </li>
          <li>
            <a href="/merryholid" className="list">
              Gift Cards
            </a>
          </li>
          <li>
            <a href="/merryholid" className="list">
              Guest Sellers
            </a>
          </li>
          <li>
            <a href="/merryholid" className="list">
              Amazon Basics
            </a>
          </li>
          <li>
            <a href="/merryholid" className="list">
              Customer Service
            </a>
          </li>
          <li>
            <a href="/merryholid" className="list">
              Prime
            </a>
          </li>
          <li>
            <a href="/merryholid" className="list">
              New Release
            </a>
          </li>
          <li>
            <a href="/merryholid" className="list">
              Books
            </a>
          </li>
          <li>
            <a href="/merryholid" className="list">
              Music
            </a>
          </li>

          <li className="nav_amazon_home">
            <a href="/merryholid" className="list">
              Amazon Home
            </a>
          </li>
          <li className="nav_dynamic_list">
            <a href="/merryholid" className="list">
              Shop the Small Bussines Gift Guide
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
