import React from 'react';

function Cart({cart, subtotal, tax}) {
return(
    <section>
        <h2>Cart</h2>
        <ul>
{cart.map(item=>{
    const {name, price} = item
    return <li>{name}: ${price}</li>
})}
        </ul>
        <h3>Subtotal: {subtotal.toFixed(2)} </h3>
        <h3>Tax: {tax.toFixed(2)} </h3>
        <h3>Total: {(tax + subtotal).toFixed(2)}</h3>
    </section>
)
}

export default Cart