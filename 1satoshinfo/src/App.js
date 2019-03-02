import React, { Component } from 'react';
import axios from 'axios'

import './App.css';

import {endpoint} from './config'
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PriceList from './components/PriceList';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      priceData : []
    }
  }

  componentDidMount() {
    axios.get(endpoint)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
  }
  render() {
    return (
      <>
        <Header />
        <SearchBar />
        <PriceList />
      </>
    );
  }
}

export default App;
