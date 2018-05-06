import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CartItem from './components/CartItem.js' ;


const products = [
    {
        id: 1,
        name: "Prada Shoes",
        price: 570
    },
    {
        id: 2,
        name: "Rolex Watch",
        price: 649
    },
    {
        id: 3,
        name: "Paper clips",
        price: 0.1
    }
]


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul className='CartItems'>
        {products.map((item, index) => (
          <CartItem key={index} { ...item } />
        ))}
        </ul>
      </div>
    );
  }
}

export default App;
