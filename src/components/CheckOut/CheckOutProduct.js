import React from "react";
import "./CheckOutProduct.css";
import product7 from "../../Assets/img/products/tablet.jpg";
import product8 from "../../Assets/img/products/toys.jpg";
import { useStateValue } from "../StateProvider/StateProvider";
function CheckOutProduct({ id, images, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeItem = () => {
    dispatch({
      type: "REMOVE_ITEM",
      id: id,
    });
  };
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + " Read more..." : str;
  }
  return (
    <div className="checkoutProduct">
      <div>
        <img
          className="checkoutProduct_image_image"
          src={images}
          alt="checkoutProdImage"
        />
      </div>
      <div className="checkoutProduct_info">
        <p>{truncate(title, 100)}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>*</p>
            ))}
        </div>
        <button className="remove_basket" onClick={removeItem}>
          remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckOutProduct;
