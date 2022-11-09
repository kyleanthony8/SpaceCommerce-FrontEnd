import React from "react";
import "./styles.css";
import Item from "./Item";
import PaymentCheckout from "./PaymentCheckout";
import { useLocation } from 'react-router-dom';


const Checkout = () => {
  const location = useLocation();
  const id = location.state._id

  return (
    <div className="app-container">
      <div className="product-col">
        <Item name={location.state.name} price={location.state.price} img={location.state.image[0].image} />
      </div>
      <div className="col no-gutters">
        <PaymentCheckout id={id} />
      </div>
    </div>
  );
}

export default Checkout;