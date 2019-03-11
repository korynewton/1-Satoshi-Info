import React, { Component } from 'react'
import axios from 'axios'

import {endpoint} from '../config'

import Price from './Price'


export default class PriceList extends Component {
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
      console.log(this.state)
    return (
        <>
            <h1> 1 satoshi is worth:</h1>          
            <div className='priceContainer'>                
            {this.state.data.map( i => <Price key={i.id} obj={i} />)}      
            </div>
        </>
    )
  }
}
