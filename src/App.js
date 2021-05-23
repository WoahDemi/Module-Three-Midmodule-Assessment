import "./App.css";
import { Component } from "react";
import CheckoutForm from "./Components/CheckoutForm";
import Menu from "./Components/Menu";
import Cart from "./Components/Cart";

class App extends Component {
  state={cart:[]}

  addItem = (item) =>{
    this.setState((prevState) => {
      // this.setState(prevState,prevProps) has to return what the state is going to be 
      // prevState is always an object
      // used to update values that are dependent on current state
      return {cart:[item, ...prevState.cart]}
    })
  }
  render() {
    console.log(this.state.cart)
    let subtotal = 0
    this.state.cart.forEach(item => subtotal += item.price)
    let tax = subtotal * .05
    let total = (subtotal + tax).toFixed(2)
    return (
      <div>
        <Menu addItem={this.addItem}/>
        <Cart cart={this.state.cart} subtotal={subtotal} tax={tax} />
        <CheckoutForm total={total}/>
      </div>
    );
  }
}

export default App;
