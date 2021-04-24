import React, { Component } from "react";

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
    if (!first || !last || !email || !card || !zip) {
      window.alert("Input is not valid");
    }else if(card.length < 16){
        window.alert(`Credit card number is not valid`)
    }else if(zip.length < 5){
        window.alert(`Zip code is not valid`)
    }
    else{
       window.alert (`Purchase complete. Your total is ${total}`)
    }
    debugger;
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

 
  render() {
    const { first, last, email, card, zip } = this.state;
    return (
      <section className="Checkout">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="first-name">First Name</label>
          <input onChange={this.handleChange} id="first-name" name={first} />
          <label htmlFor="last-name">Last Name</label>
          <input onChange={this.handleChange} id="last-name" name={last} />
          <label htmlFor="email">Email</label>
          <input onChange={this.handleChange} id="email" name={email} />
          <label htmlFor="card">Credit Card</label>
          <input onChange={this.handleChange} id="card" name={card} />
          <label htmlFor="zip">Zip Code</label>
          <input onChange={this.handleChange} name={zip} id="zip" />
          <button>Buy Now</button>
        </form>
      </section>
    );
  }
}

export default CheckoutForm;
