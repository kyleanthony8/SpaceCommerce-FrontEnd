import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSpaceItem } from "../../services/spaceItem.js";
import { NavLink } from "react-router-dom";
import "./Singlelisting.css";
import { useNavigate } from 'react-router-dom';

const Singlelisting = () => {
  const navigate = useNavigate();
  const [item, setItem] = useState({});
  const { id } = useParams();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    navigate('/checkout',{state: item});
  };

  useEffect(() => {
    const fetchItem = async () => {
      const response = await getSpaceItem(id);
      setItem(response);
    };
    fetchItem();
  }, [id]);

  if (!Object.keys(item).length) return <h1>Loading...</h1>;

  return (
//Mine
    <div className="Display">
      <img src={item.image[0].image} />
      <h2>{item.name}</h2>
      <h3>{item.price} BTC</h3>
      <p>{item.location}</p>
      <h1>TEST TEST</h1>
      <button>Fav</button>
      <NavLink to={`/checkout/${id}`}>
          <div className="navLinks">Buy</div>
        </NavLink>
        
        

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
            <button className="buy-btn" onClick={handleOnSubmit}>Buy</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Singlelisting;
