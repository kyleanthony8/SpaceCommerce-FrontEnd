import React from "react";
import "./styles.css";

const Button = (props) => (
  <button className="checkout-btn" type="button">{props.text}</button>
);

export default Button;