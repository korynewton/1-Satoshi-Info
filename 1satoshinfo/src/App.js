import React, { Component } from 'react';
import axios from 'axios'

import {endpoint} from './config'
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PriceList from './components/PriceList';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data : []
    }
  }

  componentDidMount() {
    axios.get(endpoint)
    .then( res => {
    let countries = Object.keys(res.data.rates)
    let prices = Object.values(res.data.rates)
    let btcFactor = (1 / res.data.rates.BTC) / 100000000
    let newPrices = prices.map(i =>  i * btcFactor)
    let newList = []
    for (let i = 0 ; i<countries.length; i++) {
      if (countries[i] !== 'BTC') {
        let tempObj = { 
          id: i,
          country: `${countries[i]}`,
          price: newPrices[i].toFixed(5)
         }
         newList.push(tempObj)
      }
    }
    this.setState({
      data : newList
    })
  })   
    
    .catch((err) => console.log(err))
  }

  render() {
    // console.log(this.state)
    return (
      <>
        <Header />
        <SearchBar />
        <PriceList data={this.state.data} />
      </>
    );
  }
}

export default App;
