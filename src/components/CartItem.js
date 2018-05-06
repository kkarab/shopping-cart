// src/components/CartItem.js
import React, { PureComponent } from 'react'

class CartItem extends PureComponent {
  render() {
    const { name, price } = this.props
    return (
      <li className="CartItem">
        <p className="name">{name}</p>
        <p className="price">{price}</p>
      </li>
    )
  }
}

export default CartItem
