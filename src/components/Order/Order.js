import React from "react";
import moment from "moment";
import "./Order.css";
import CheckOutProduct from "../CheckOut/CheckOutProduct";
import CurrencyFormat from "react-currency-format";
function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY,h:mma")}</p>
      <p className="order_id">
        <small>{order.id}</small>
      </p>
      <p>{order.id}</p>
      {order.data.basket?.map((item) => (
        <CheckOutProduct
          id={item.id}
          title={item.title}
          images={item.images}
          price={item.price}
          rating={item.rating}
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({order.length} items):<strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
