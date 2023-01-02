import React from "react";
import "./Subtotal.css";
import CurrentFormat from "react-currency-format";
import { useStateValue } from "../StateProvider/StateProvider";
// import reducer from "../../reducer";
import { useNavigate } from "react-router-dom";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

  const navigate = useNavigate();

  return (
    <div className="subtotal">
      <CurrentFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({basket.length} items):<strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => navigate("/payment")}>Proceed to ckeckout</button>
    </div>
  );
}

export default Subtotal;
