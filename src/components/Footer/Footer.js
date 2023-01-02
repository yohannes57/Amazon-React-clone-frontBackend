// import { width } from "@mui/system";
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import logo from "../../Assets/img/amazon-dark-logo.png";
import "./Footer.css";
function Footer() {
  const goBackTop = () => {
    window.scrollTo(0, 0);
  };
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()}/${current.getFullYear()}`;
  return (
    <div className="footer">
      <div className="footer_backtotop">
        <button className="footer_backtotop-button" onClick={goBackTop}>
          back to top
        </button>
      </div>
      <div className="footer_container">
        <div className="footer_columns">
          <div className="footer_each_col">
            <h3>Get to Know Us</h3>
            <ul>
              <li>
                <a href="/">Careers Amazon</a>
              </li>
              <li>
                <a href="/"> Newsletter</a>
              </li>
              <li>
                <a href="/"> About Amazon </a>
              </li>
              <li>
                <a href="/">Sustainability </a>
              </li>
              <li>
                <a href="/">Press Center </a>
              </li>
              <li>
                <a href="/">Investor Relations </a>
              </li>
              <li>
                <a href="/">Amazon Devices </a>
              </li>
              <li>
                <a href="/">Amazon Science </a>
              </li>
            </ul>
          </div>

          <div className="footer_each_col">
            <h3>Make Money with Us</h3>
            <ul>
              <li>
                <a href="/">Sell products on Amazon</a>
              </li>
              <li>
                <a href="/"> Sell apps on Amazon</a>
              </li>
              <li>
                <a href="/"> Supply to Amazon </a>
              </li>
              <li>
                <a href="/">Become an Affiliate</a>
              </li>
              <li>
                <a href="/"> delivery business</a>
              </li>
              <li>
                <a href="/"> delivery business</a>
              </li>
              <li>
                <a href="/"> Your Products </a>
              </li>
              <li>
                <a href="/">Advertise </a>
              </li>
              <li>
                <a href="/">Self-Publish with Us</a>
              </li>
            </ul>
          </div>

          <div className="footer_each_col">
            <h3>Amazon Payment Products</h3>
            <ul>
              <li>
                <a href="/">Amazon Rewards Visa </a>
              </li>
              <li>
                <a href="/">Visa Signature Cards</a>
              </li>
              <li>
                <a href="/"> Amazon Store Card</a>
              </li>
              <li>
                <a href="/">Amazon Secured Card </a>
              </li>
              <li>
                <a href="/">Amazon Business Card </a>
              </li>
              <li>
                <a href="/">Shop with Points </a>
              </li>
              <li>
                <a href="/">Credit Card Marketplace</a>
              </li>
              <li>
                <a href="/">Reload Your Balance </a>
              </li>
              <li>
                <a href="/">Amazon Currency Convertere </a>
              </li>
            </ul>
          </div>
          <div className="footer_each_col">
            <h3>Get to Know Us</h3>
            <ul>
              <li>
                <a href="/">Amazon and COVID-19t</a>
              </li>
              <li>
                <a href="/">Your Account</a>
              </li>
              <li>
                <a href="/"> Your Orders</a>
              </li>
              <li>
                <a href="/"> Shipping Rates & Policies</a>
              </li>
              <li>
                <a href="/">Amazon Prime</a>
              </li>
              <li>
                <a href="/">Returns & Replacements </a>
              </li>
              <li>
                <a href="/">Manage Your Content and Devices </a>
              </li>
              <li>
                <a href="/">Your Recalls and Product Safety Alerts </a>
              </li>
              <li>
                <a href="/">Amazon Assistant Help </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer_end">
        <button className="footer_image-button" onClick={goBackTop}>
          <img className="footer_image" src={logo} alt="footerlogo" />
        </button>
      </div>
      <div className="footer_end_para">
        <p>Conditions of Use Privacy Notice Interest-Based Ads</p>
        <p> © 1996-2022, Amazon.com, Inc. or its affiliates</p>
        <p>developed by.Yohannes D {date}</p>
      </div>
    </div>
  );
}

export default Footer;
