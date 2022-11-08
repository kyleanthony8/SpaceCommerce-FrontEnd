import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { getSpaceItem } from "../../services/spaceItem.js";

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
    <div className="Display">
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
