import { useState, useEffect } from "react";
import ItemDisplay from "../../components/ItemDisplay.jsx";
import { getSpaceItems } from "../../services/spaceItem.js"

const SpaceItem = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const allItems = await getSpaceItems();
      setItems(allItems);
    };
    fetchItems();
  }, []);

  return (
      <div>
        {items.length > 0 ?
          <div className="items">
          {items.map((item, index) => {
            return <ItemDisplay
              item={item}
              key={index}
            />;
          })}
          </div> 
          :
          <div>
            Loading...
          </div>}
        </div>
  );
};
export default SpaceItem;