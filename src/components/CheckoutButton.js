// src/components/CheckoutButton.js
import React, { PureComponent } from 'react'

class CheckoutButton extends PureComponent {
  render() {
    return(
    // to render a checkout CheckoutButton  <h1>{ this.props.content }</h1>
    <button
        className="btn btn-default"
        // style={buttonStyle}
        onClick={this.props.handleClick}>{this.props.label}</button>
    )
  }
}

export default CheckoutButton
