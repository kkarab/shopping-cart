import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CartItem from './components/CartItem.js' ;
import CheckoutButton from './components/CheckoutButton.js' ;
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
  state = {
    products:products,
    basket:products.map((item, index) => {
          return {...item, quantity:0};
        }),
    total : 0
    }


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
        <p>
          <CheckoutButton onCheckOutClick={() => {
            this.updateTotal()
          }}/>
        </p>
        <p>
          {"Total value: " + this.state.total}
        </p>
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
    }),
    total : this.state.total
    })
    // console.log(this.state)
  }

  updateTotal() {
    this.setState({
      products: this.state.products,
      basket: this.state.basket,
      total: this.state.basket.map((item,index) => {
        return item.price * item.quantity
      }).reduce((a,b) => a + b, 0)
    })
  }
}

export default App;
