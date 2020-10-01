import React, { Component } from 'react';
import './App.css';
import Feature from './Feature.js'

class Features extends Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            return (
                <Feature
                    featureName={feature}
                    options={this.props.features[feature]}
                    key={idx}
                    selected={this.props.selected}
                    updateFeature={this.props.updateFeature}
                    USCurrencyFormat={this.props.USCurrencyFormat}
                />
            )

        });
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
        )

    }
}

export default Features;