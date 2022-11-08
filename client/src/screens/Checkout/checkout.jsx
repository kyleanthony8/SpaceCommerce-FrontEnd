import React from "react";
import "./styles.css";
import Item from "./Item";
import PaymentCheckout from "./PaymentCheckout";

const Checkout = (props) => {
  return (
    <div className="app-container">
      <div className="product-col">
        <Item name="Instax Mini 90 Neo Classic" price="$144.99" img="http://ecx.images-amazon.com/images/I/61%2BABMMN5zL._SL1500_.jpg" />
      </div>
      <div className="col no-gutters">
        <PaymentCheckout />
      </div>
    </div>
  );
}

export default Checkout;