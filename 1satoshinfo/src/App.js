import React, { Component } from 'react';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PriceList from './components/PriceList';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
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
