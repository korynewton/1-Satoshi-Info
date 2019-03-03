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
      country : [],
      price: [],
      factor : 0
    }
  }

  componentDidMount() {
    axios.get(endpoint)
    .then( res => {
    //   let obj = res.data.rates
    //   let arr = Object.keys(obj)
    //   let arrObj = arr.map( key =>  {
    //     return {[key] : obj[key]}
    // })
    // this.setState({
    //   prices : arrObj
    // })
    let countries = Object.keys(res.data.rates)
    let prices = Object.values(res.data.rates)
    let btcFactor = (1 / res.data.rates.BTC) / 100000000
    let newPrices = prices.map(i =>  i * btcFactor)
    this.setState({
      country : countries,
      price : newPrices
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
        <PriceList prices={this.state} />
      </>
    );
  }
}

export default App;
