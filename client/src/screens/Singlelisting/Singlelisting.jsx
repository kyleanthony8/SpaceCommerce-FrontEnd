import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { getSpaceItem } from "../../services/spaceItem.js";
import Item from "../Checkout/Item";
import "./Singlelisting.css";

const Singlelisting = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      const response = await getSpaceItem(id);
      setItem(response);
    };
    fetchItem();
  }, [id]);

  if (!Object.keys(item).length) return <h1>Loading...</h1>;

  return (
    <div className="listing-container">
      <div className="listing-image">
        <div className="item-container">
          <div className="item-image">
            <img src={item.image[0].image}/>
          </div>
        </div>
      </div>
      <div className="listing">
        <div className="listing-details">
          <div className="listing-details-container">
            <h2 className="listing-item-h2">{item.name}</h2>
            <h3 className="listing-item-h3">{item.price} BTC</h3>
            <p className="listing-item-p">{item.location}</p>
            <button className="buy-btn">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singlelisting;
