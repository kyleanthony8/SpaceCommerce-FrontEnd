import React from "react";
import "./styles.css";
import Item from "./Item";
import PaymentCheckout from "./PaymentCheckout";

const Checkout = (props) => {
  return (
    <div className="app-container">
      <div className="product-col">
        <Item name={props.name} price={props.price} img={props.img} />
      </div>
      <div className="col no-gutters">
        <PaymentCheckout />
      </div>
    </div>
  );
}

export default Checkout;