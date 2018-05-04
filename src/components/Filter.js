import React from 'react';

const Filter = (filters, onhandleFilterChange) => {

    return (
      <select onChange={onhandleFilterChange} defaultValue='all'>
        <option value='all'>All</option>
        {filters.map(filter =>
          <option key={filter} value={filter}>{filter}</option>
        )}
      </select>
    );
}

Filter.defaultProps = {
  filters: [],
  onhandleFilterChange: function() {}
};

export default Filter;
