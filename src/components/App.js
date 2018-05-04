import React, { Component } from 'react';

import FruitBasket from './FruitBasket';

export default class App extends Component{
  constructor() {
    super();

    this.state = {
      filters: [],
      items: [],
      filters: [],
      selectedFilter: null
    };
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  
  render(){
    return (
      <FruitBasket

      />
    )
  }
}
