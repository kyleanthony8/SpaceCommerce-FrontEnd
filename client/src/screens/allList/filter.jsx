import { useRef, useState } from "react";
import ItemDisplay from "../../components/ItemDisplay";

function Filter() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const inputRef = useRef();

  const filteredItems = items.filter((item) => {
    return item.toLowerCase().includes(query.toLowerCase());
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

  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      type="search"
    />
  );
}

export default Filter;
