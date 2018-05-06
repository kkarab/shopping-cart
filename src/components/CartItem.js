// src/components/CartItem.js
import React, { PureComponent } from 'react'

class CartItem extends PureComponent {
  render() {
    const { name, price, quantity, onPlusClick } = this.props
    return (
      <li className="CartItem">
        <p className="name">{name}</p>
        <p className="price">{price}</p>
        <button
            className="btn btn-add"
            // style={buttonStyle}
            onClick={onPlusClick}>{'+'}</button>
        <p className="quantity">{quantity}</p>
      </li>
    )
  }
}

export default CartItem
