import React, { Component } from 'react';
import './App.css';
import Option from './Option';

class Feature extends Component {
    render() {
        const featureHash = this.props.options + '-' + this.props.idx;
        const options = this.props.options.map((option, index) => {
            return (
                <Option
                    featureName={this.props.featureName}
                    selected={this.props.selected}
                    option={option}
                    key={index}
                    USCurrencyFormat={this.props.USCurrencyFormat}
                    updateFeature={this.props.updateFeature}
                />

            )
        })
        return (
            <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                    <h3>{this.props.featureName}</h3>
                </legend>
                {options}
            </fieldset>
        )
    }
}

export default Feature;
