import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import CheckOut from "./components/CheckOut/CheckOut";
import Header from "./components/Header/Header";
import Login from "./Login";
import Payment from "./components/Payment/Payment";
//
import reducer, {
  useStateValue,
} from "./components/StateProvider/StateProvider";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Ordres/Orders";

const promise = loadStripe(
  "pk_test_51MI66UFTGqOB8dOE0lW49wYDym5I8Hk91UPm3bk70DVqPZwzyiicYbDZUmiZLMsVYUFtHC0rOiexxZmxTy2ZDlSR00cldUYidM"
);
//
function Routing() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //if the user logged in /was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Nav />
            <Home />
          </>
        }
      />
      <Route path="/checkout" element={<CheckOut />} />

      <Route
        path="/orders"
        element={
          <>
            <Header />
            <Orders />
          </>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/payment"
        element={
          <Elements stripe={promise}>
            <Header />
            <Payment />
          </Elements>
        }
      />
      <Route
        path="*"
        element={
          <>
            <Header />
            <Nav />
            <Home />
          </>
        }
      />
    </Routes>
  );
}

export default Routing;
