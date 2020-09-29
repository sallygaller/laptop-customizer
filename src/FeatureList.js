import React, { Component } from 'react';
import slugify from 'slugify';
import './App.css';
import Features from './Features'

class FeatureList extends Component {

  render() {
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <Features
          selected={this.props.selected}
          features={this.props.features}
          USCurrencyFormat={USCurrencyFormat}
          updateFeature={this.props.updateFeature} 
        />
      </form>
    )
  }
}

export default FeatureList;