import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

import './App.css';
import Summary from './Summary.js';
import FeatureList from './FeatureList'

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {
        Processor: {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        'Operating System': {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        'Video Card': {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
    }
  }

  handleUpdateFeature = (feature, newValue) => {
    console.log(feature)
    console.log(newValue)

    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
    console.log(selected)
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <FeatureList
            selected={this.state.selected}
            features={this.props.features}
            USCurrencyFormat={USCurrencyFormat}
            updateFeature={this.handleUpdateFeature}     
          />
          <Summary
            selected={this.state.selected}
            features={this.props.features}
            USCurrencyFormat={USCurrencyFormat}
          />
        </main>
      </div>
    );
  }
}

export default App;
