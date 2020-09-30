import React, { Component } from 'react';
import slugify from 'slugify';
import './App.css';
import Total from './Total';
import Cart from './Cart';

class Summary extends Component {
    render() {
        return (
            <section className="main__summary">
                <Cart
                    selected={this.props.selected}
                    USCurrencyFormat={this.props.USCurrencyFormat}
                    features={this.props.features}
                />
                <Total
                    selected={this.props.selected}
                    USCurrencyFormat={this.props.USCurrencyFormat}
                />
            </section>
        )
    }
}

export default Summary;