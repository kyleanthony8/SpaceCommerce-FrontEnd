import React from 'react'
import './ItemDisplay.css';

const ItemDisplay = ({ item }) => {
  console.log(item.image)
  return (
    <div className="Display">
      <img src={item.image[0].image} />
      <h2>{item.name}</h2>
      <h3>{item.price} BTC</h3>
    </div>
  );
};
export default ItemDisplay;
