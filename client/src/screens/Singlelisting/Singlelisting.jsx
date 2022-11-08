import React from "react";
import './ItemDisplay.css';

const ItemDisplay = ({ item }) => {
  return (
    <div className="Display">
      <img src={item.image[0].image} />
      <h2>{item.name}</h2>
      <h3>{item.price} BTC</h3>
      <p>{item.location}</p>
    </div>
  );
};
export default Singlelisting;
