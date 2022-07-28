import React, { useState } from "react";

function Item({ name, category }) {
  const [item, setItem] = useState(false);

  function handleItem(){
    setItem(!item)
  }
  const itemClass = item ? "in-cart" : "";
  const itemButton = item ? <button>Remove From Cart</button> : <button>Add To Cart</button>;
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleItem}>{itemButton}</button>
    </li>
  );
}

export default Item;
