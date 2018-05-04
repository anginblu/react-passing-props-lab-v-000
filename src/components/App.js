import React, { Component } from 'react';

import FruitBasket from './FruitBasket';

export default class App extends Component{
  constructor() {
    super();

    this.state = {
      filters: [],
      fruit: [],
      currentFilter: null
    };
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchFruits = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }


  handleFilterChange = (e) => {
    console.log('new filter: ', e.target.value);
    this.setState({ currentFilter: e.target.value });
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruits();
  }

  render() {
    return (
      <FruitBasket
        fruit = {this.state.fruit}
        filters = {this.state.filters}
        currentFilter={this.state.currentFilter}
        onhandleFilterChange={this.handleFilterChange} />
    )
  }
}
