import React from "react";
import styles from "../../style";
import "./Singlelisting.css";


const Singlelisting = ({ item }) => {
  return (
    <div className="Display">
      <Singlelisting item={item} />
      <img src={item.image[0].image} />
      <h2>{item.name}</h2>
      <h3>{item.price} BTC</h3>
      <p>{item.location}</p>
      <h1>TEST TEST</h1>
      <button>Fav</button>
      <button>Buy</button>
    </div>
  );
};

export default Singlelisting;
