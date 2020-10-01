import React, { Component } from 'react';
import './App.css';
import ItemFeatureOption from './ItemFeatureOption';

class ItemFeature extends Component {
    render() {
        const featureHash = this.props.options + '-' + this.props.idx;
        const options = this.props.options.map((option, index) => {
            return (
                <ItemFeatureOption
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

export default ItemFeature;
