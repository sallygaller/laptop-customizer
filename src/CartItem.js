import React, { Component } from 'react';
import slugify from 'slugify';
import './App.css';

class CartItem extends Component {
    render() {
        const featureHash = this.props.selected.feature + '-' + this.props.idx;
        console.log(this.props.selected)
        const selectedOption = this.props.selected[this.props.featureName];
        return (
            <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{this.props.featureName} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">{this.props.USCurrencyFormat.format(selectedOption.cost)}
                </div>
            </div>
        );
    }
}

export default CartItem;
