import React from "react";
import "./CheckOut.css";
import { Link } from "react-router-dom";
import Subtotal from "./Subtotal";
import CheckOutProduct from "./CheckOutProduct";
import { useStateValue } from "../StateProvider/StateProvider";
function CheckOut() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="ckeckout_left">
        <Link to="/">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt="iamge"
          />
        </Link>

        <h3 className="checkout_hello">Hello, </h3>
        <h2 className="checkout__title">Your shopping Basket </h2>
        {basket.map((item, i) => (
          <CheckOutProduct
            key={i}
            id={item.id}
            title={item.title}
            images={item.images}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout__right">
        <div>
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
