import { Component } from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import { lazy, Suspense } from "react";

//components
import AppBar from "./Components/AppBar";
//views

import "./App.scss";

class App extends Component {
  state = {
    category: "WOMEN",
    currency: "",
    cart: [],
  };

  handleCategorySelect = (categoryName) => {
    this.setState({ category: categoryName });
    console.log(this.state.category);
  };

  handleCurrencySelect = (currencyName) => {
    this.setState({ currency: currencyName });
    console.log(this.state.currency);
  };

  handleAddToCart = (product) => {
    this.setState({ cart: this.state.cart.push(product) });
  };

  render() {
    return (
      <div className="App">
        <AppBar
          categorySelect={this.handleCategorySelect}
          currencySelect={this.handleCurrencySelect}
        />
      </div>
    );
  }
}

export default App;
