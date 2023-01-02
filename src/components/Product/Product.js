import React from "react";
import "./Product.css";
// import product1 from "../../Assets/img/products/product-1.jpg";
import { useStateValue } from "../StateProvider/StateProvider";

function Product({ id, title, price, rating, images, addtobasket }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        images: images,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>*</p>
            ))}
        </div>
      </div>
      <div className="product_image">
        <img src={images} alt="productone" />
        <button onClick={addToBasket}>{addtobasket}</button>
      </div>
    </div>
  );
}

export default Product;
