import React from 'react'
import './ItemDisplay.css';

const ItemDisplay = ({ item }) => {
  return (
    <div className="Display">
      <h2>{item.name}</h2>
      <h3>{item.price}</h3>
    </div>
  );
};
export default ItemDisplay;
