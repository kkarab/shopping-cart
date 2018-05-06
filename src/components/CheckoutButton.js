// src/components/CheckoutButton.js
import React, { PureComponent } from 'react'

class CheckoutButton extends PureComponent {
  render() {
    const { onCheckOutClick } = this.props
    return(
    // to render a checkout CheckoutButton  <h1>{ this.props.content }</h1>
    <button
        className="btn btn-default"
        // style={buttonStyle}
        onClick={onCheckOutClick}>{"Checkout"}</button>
    )
  }
}

export default CheckoutButton
