import { useState, useEffect, useRef } from "react";
import ItemDisplay from "../../components/ItemDisplay.jsx";
import { getSpaceItems } from "../../services/spaceItem.js";
import { useLocation } from "react-router-dom";

const SpaceItem = (props) => {
  const [items, setItems] = useState([]);
  const [number, setNumber] = useState([]);
  const num = items.length;
  const path = useLocation();

  const spaceData = items.map((item) => {
    const space = {};
    space.name = item.name;
    space.price = item.price;

    item.image.length != 0
      ? (space.image = item.image)
      : (space.image = [{ name: "No Image", image: "" }]);

    return space;
  });

  const changeNumber = () => {
    if (path.pathname === "/") {
      setNumber(12);
    } else {
      setNumber(num);
    }
  };
  useEffect(() => {
    const fetchItems = async () => {
      const allItems = await getSpaceItems();
      setItems(allItems);
      changeNumber();
    };
    fetchItems();
  }, []);

  return (
    <div>
      {items.length > 0 ? (
        <div className="items">
          {spaceData.slice(0, number).map((item, index) => {
            return <ItemDisplay item={item} key={index} />;
          })}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
export default SpaceItem;
