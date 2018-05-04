import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({fruit, filters, currentFilter, onhandleFilterChange}) => {
    return (
      <div className="fruit-basket">
        <Filter filters = {filters} handleFilterChange={onhandleFilterChange} />
        <FilteredFruitList
          filter={currentFilter} />
      </div>
    );
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: null,
  onhandleFilterChange: function() {}
};

export default FruitBasket;
