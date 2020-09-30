import React, { Component } from 'react';
import slugify from 'slugify';
import './App.css';

class Feature extends Component {
    render() {
        console.log(this.props.options)
        const featureHash = this.props.options + '-' + this.props.idx;
        const options = this.props.options.map(item => {
            console.log(item)
            const itemHash = slugify(JSON.stringify(item));
            return (

                <div key={itemHash} className="feature__item">
                    <input
                        type="radio"
                        id={itemHash}
                        value={item}
                        className="feature__option"
                        name={itemHash}
                        checked={item.name === this.props.selected[this.props.featureName].name}
                        onChange={
                            (e) => this.props.updateFeature(this.props.featureName, item)}
                    />
                    <label htmlFor={itemHash} className="feature__label">
                        {item.name} ({item.cost})
                  </label>
                </div>
            );
        });
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
