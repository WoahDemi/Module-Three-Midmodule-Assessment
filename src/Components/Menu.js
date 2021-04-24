import React from 'react';
import productData from "../data/productData"
import Item from "./Item"
import "./Menu.css"
function Products({addItem}){
    const items = productData.map(item =>  {return <Item key={item.id} item={item} addItem={addItem} />})

    return(
        <section className="Products">
            <h1>My Garage Sale</h1>
            {items}
        </section>
    )
}

export default Products;