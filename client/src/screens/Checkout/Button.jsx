import React from "react";
import "./styles.css";
import { buySpaceItem } from "../../services/spaceItem";
import { useNavigate } from "react-router-dom";

const Button = ({text, id}) => {
  const navigate = useNavigate();
  const buyItem = async () => {
    await buySpaceItem(id);
    navigate(`/details/${id}`, { replace: true });
  }
  
  return (
    <button onClick={buyItem} className="checkout-btn" type="button">{text}</button>
  )
}

export default Button;