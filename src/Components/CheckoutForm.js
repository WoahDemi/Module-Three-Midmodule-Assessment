import React, { Component } from "react";
import formatPrice from "../helpers/formatPrice"
class CheckoutForm extends Component {
  state = {
    first: "",
    last: "",
    email: "",
    card: "",
    zip: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { first, last, email, card, zip } = this.state;
    const {total} = this.props
    debugger
    if (!first || !last || !email || !card || !zip) {
      window.alert("Input is not valid");
    }else if(card.length !== 16){
        window.alert(`Credit card number is not valid`)
    }else if(zip.length !== 5){
        window.alert(`Zip code is not valid`)
    }
    else{
      debugger
       window.alert (`Purchase complete. Your total is $${total}`)
    }
    // debugger;
  };


  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    debugger
  };

 
  render() {
    const { first, last, email, card, zip } = this.state;
    return (
      <section className="Checkout">
        <h2>Checkout</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="first-name">First Name</label>
          <input onChange={this.handleChange} id="first-name" name="first" value={first} />
          <label htmlFor="last-name">Last Name</label>
          <input onChange={this.handleChange} id="last-name" name="last" value={last} />
          <label htmlFor="email">Email</label>
          <input onChange={this.handleChange} id="email" name="email" value={email} />
          <label htmlFor="card">Credit Card</label>
          <input onChange={this.handleChange} id="card" name="card" type="number" value={card} />
          <label htmlFor="zip">Zip Code</label>
          <input onChange={this.handleChange} name="zip" type= "number" value={zip} id="zip" />
          <button>Buy Now</button>
        </form>
      </section>
    );
  }
}

export default CheckoutForm;
