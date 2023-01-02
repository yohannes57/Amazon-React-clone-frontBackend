import React, { useState, useEffect } from "react";
import "./Orders.css";
import { db } from "../../firebase";
import Order from "../Order/Order";
import { useStateValue } from "../StateProvider/StateProvider";
function Orders() {
  const [{ basket, user }] = useStateValue();
  const [orders, setOrderes] = useState([]);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrderes(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrderes([]);
    }
  }, [user]);
  return (
    <div className="orders_c">
      <div>
        <h1>Your Orders</h1>
      </div>
      <div className="orderes_order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
