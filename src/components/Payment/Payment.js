import React, { useState, useEffect } from "react";
import "./Payment.css";
import axios from "../../axios";
import { useStateValue } from "../StateProvider/StateProvider";
import { Link, useNavigate } from "react-router-dom";
import CheckOutProduct from "../CheckOut/CheckOutProduct";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrentFormat from "react-currency-format";
import { db } from "../../firebase";
// import { collection, doc, setDoc } from "firebase/firestore";
//
function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succedded, setSucceded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);

  const navigate = useNavigate();

  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

  useEffect(() => {
    const getClientSecret = async () => {
      //queryparam is arfter ?
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      }).catch((error) => {
        console.log("error from axios: ", error);
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);
  console.log("hello clientg secret >>>>", clientSecret);

  //
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        setSucceded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });
        navigate("/orders");
      });
  };

  const handleOnchange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  //
  return (
    <div className="payment">
      <div className="payment_checkout">
        <h1>
          Checkout ( <Link to="/checkout">{basket?.length} items</Link>)
        </h1>
      </div>
      {/* sections */}
      <div className="payment_sections">
        <div className="payment_section_row">
          <div className="payment_section_row_address">
            <div className="payment_title">
              <h3>Delivery address</h3>
            </div>
            <div className="payment_address">
              <p>{user?.email}</p>
              <p>234 the place</p>
              <p>the state ,</p>
            </div>
          </div>
        </div>
        <div className="payment_section_row">
          <div className="payment_title">
            <p>Review items</p>
            <p>and delivery</p>
          </div>
          <div className="payment_items">
            {basket?.map((item, i) => (
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
        </div>

        <div className="payment_section_row">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleOnchange} />
              <div className="payement_priceInfo">
                <CurrentFormat
                  renderText={(value) => <h3>Order Total:{value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button
                  disabled={processing || disabled || succedded}
                  className="payment_pay"
                >
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>

      {/* back to page */}
      <div className="payment_to_home">
        <Link to="/">
          <h4>back to home page</h4>
        </Link>
      </div>
    </div>
  );
}

export default Payment;
// const paymentRef = doc(
//   db,
//   collection("users"),
//   "users",
//   user?.uid,
//   collection("orders"),
//   paymentIntent.id
// );
// setDoc(paymentRef, {
//   basket: basket,
//   amount: paymentIntent.amount,
//   created: paymentIntent.created,
// });
