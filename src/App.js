import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CartItem from './components/CartItem.js' ;
import Clock from 'react-live-clock';


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
  state = {products:products, basket:products.map((item, index) => {
    return {...item, quantity:0};
  })}


  render() {
    return (
      <div className="App">
      <Clock format={'HH:mm:ss'} ticking={true} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul className='CartItems'>
        {this.state.basket.map((item, index) => (
          <CartItem key={index} { ...item} onPlusClick={() => {
            this.incrementQuantity(item.id)
          }} />
        ))}
        </ul>
      </div>
    );
  }

  incrementQuantity(productId) {
    // console.log('increment '+productId)
    // console.log(this.state)
    this.setState({
    products: this.state.products,
    basket: this.state.basket.map((item,index) => {
      if (item.id!==productId) return item
      return {...item, quantity: item.quantity +1}
    })
    })
    // console.log(this.state)
  }
}

export default App;
