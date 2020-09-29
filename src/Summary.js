import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import './App.css';
import Total from './Total.js';

class Summary extends Component {

    render() {
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        });
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];

            return (
                <div className="summary__option" key={featureHash}>
                    <div className="summary__option__label">{feature} </div>
                    <div className="summary__option__value">{selectedOption.name}</div>
                    <div className="summary__option__cost">
                        {this.props.USCurrencyFormat.format(selectedOption.cost)}
                    </div>
                </div>
            );
        });
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <Total
                    selected={this.props.selected}
                    USCurrencyFormat={USCurrencyFormat}
                />
            </section>
        )
    }
}

export default Summary;