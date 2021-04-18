import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51IhRn6HlTrhgJz5GhJ7Z7Ue4YfWB50QoXNPA6kqfkVklRFMLilgWhDtjPL10o1joUOv7x7CYaMYVTMFtYqSaY0DJ00vJJhTT6t"
);
const PlaceOrder = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <h1 className="highlight text-center">Proceed Payment</h1>
        <CardElement
          className=""
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <br />
        <button onClick={() => alert("payment successful")}>Pay</button>
      </Elements>
    </div>
  );
};

export default PlaceOrder;
