import React, { Component } from 'react';
import slugify from 'slugify';
import './App.css';
import CartItem from './CartItem'

class Cart extends Component {
    render() {
        const cart = Object.keys(this.props.selected).map((feature, idx) => {
            return (
                <CartItem
                    featureName={feature}
                    options={this.props.features[feature]}
                    key={idx}
                    selected={this.props.selected}
                    USCurrencyFormat={this.props.USCurrencyFormat}
                />
            )
        });
        return (
            <div>
            <h2>Your cart</h2>
            {cart}
            </div>
        )
    }
}

export default Cart;