const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51MI66UFTGqOB8dOEQqcHshbur0URahFUwRHBpK8k89uNqPG55l4ikyzW0ZiHuyMgESMd3GRXD2MVcemlpa1V9pDB000DdpxSbs"
);
// API sk_test_51MI66UFTGqOB8dOEQqcHshbur0URahFUwRHBpK8k89uNqPG55l4ikyzW0ZiHuyMgESMd3GRXD2MVcemlpa1V9pDB000DdpxSbs
// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.get("/Group1", (request, response) => response.status(200).send("droup1"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://127.0.0.1:5001/clone-1e0b0/us-central1/api
