import React from "react";
import "./styles.css";
import { buySpaceItem } from "../../services/spaceItem";

const Button = ({text, id}) => {

  const buyItem = async () => {
    await buySpaceItem(id);
  }
  
  return (
    <button onClick={buyItem} className="checkout-btn" type="button">{text}</button>
  )
}

export default Button;