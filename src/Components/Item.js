import React from "react";
import formatPrice from "../helpers/formatPrice";

function Item({item, addItem }) {
    const {name, price, description, img} = item
  return (
    <div>
      <h3>{name}</h3>

      <p>Price: {formatPrice(price)}</p>
      <button onClick={() => addItem(item)}>Add To Cart</button>
      <br></br>
      <img src={img} alt={name} />
      <p>{description}</p>
    </div>
  );
}

export default Item;
