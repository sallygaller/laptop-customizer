import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import './App.css';

class FeatureList extends Component {
    
render() {
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    const features = Object.keys(this.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = this.props.features[feature].map(item => {
          console.log(item)
          const itemHash = slugify(JSON.stringify(item));
          return (
            <div key={itemHash} className="feature__item">
              <input
                type="radio"
                id={itemHash}
                value={item}
                className="feature__option"
                name={slugify(feature)}
                checked={item.name === this.props.selected[feature].name}
                onChange={
                    (e) => this.props.handleFeatureUpdate(feature, item)}
              />
              <label htmlFor={itemHash} className="feature__label">
                {item.name} ({USCurrencyFormat.format(item.cost)})
              </label>
            </div>
          );
        });
  
        return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            {options}
          </fieldset>
        );
      });

    return(
    <form className="main__form">
    <h2>Customize your laptop</h2>
    {features}
  </form>


    )}
}

export default FeatureList;