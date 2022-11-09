import { useState, useEffect, useRef } from "react";
import ItemDisplay from "../../components/ItemDisplay.jsx";
import { getSpaceItems } from "../../services/spaceItem.js";
import { useLocation } from "react-router-dom";
import "./allListings.css";

const SpaceItem = () => {
  const [items, setItems] = useState([]);
  const [number, setNumber] = useState([]);
  const [query, setQuery] = useState("");
  const [toggle, setToggle] = useState(false);
  const inputRef = useRef();
  const path = useLocation();
  let num = 0;

  const spaceData = items.map((item) => {
    const space = {};
    space.name = item.name;
    space.price = item.price;
    space._id = item._id;

    item.image.length != 0
      ? (space.image = item.image)
      : (space.image = ["636bb1f197753db232ec31c5"]);

    return space;
  });

  const filteredItems = spaceData.filter((item) => {
    return item.name.toLowerCase().includes(query.toLowerCase());
  });

  function onSubmit(e) {
    e.preventDefualt();

    const value = inputRef.current.value;
    if (value === "") return;
    setItems((prev) => {
      return [...prev, value];
    });

    inputRef.current.value = "";
  }

  const changeNumber = (num) => {
    if (path.pathname === "/") {
      setNumber(12);
      setToggle(false);
    } else {
      setNumber(num);
      setToggle(true);
    }
  };
  useEffect(() => {
    const fetchItems = async () => {
      const allItems = await getSpaceItems();
      setItems(allItems);
      num = items.length;
    };
    fetchItems();
    changeNumber();
  }, []);

  if (!Object.keys(items).length) return <h1>Loading...</h1>;

  return (
    <div className="cont">
      {toggle && (
        <input
          className="search"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="search"
        />
      )}
      {items.length > 0 ? (
        <div className="items">
          {filteredItems.slice(0, number).map((item, index) => {
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
