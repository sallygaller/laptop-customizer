import React, { Component } from 'react';
import slugify from 'slugify';
import './App.css';

class ItemFeatureOption extends Component {
    render() {
        const itemHash = slugify(JSON.stringify(this.props.option));
        return (
            <div key={itemHash} className="feature__item">
                <input
                    type="radio"
                    id={itemHash}
                    value={this.props.option}
                    className="feature__option"
                    name={itemHash}
                    checked={this.props.option.name === this.props.selected[this.props.featureName].name}
                    onChange={
                        (e) => this.props.updateFeature(this.props.featureName, this.props.option)}
                />
                <label htmlFor={itemHash} className="feature__label">
                    {this.props.option.name} ({this.props.USCurrencyFormat.format(this.props.option.cost)})
                </label>
            </div>
        );

    }
}

export default ItemFeatureOption;