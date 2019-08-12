import React from 'react';
import './Filters.css';
import Select from 'react-select';

const Filters = props => {
    return (
      <div className='input-container'>
        <i className='fas fa-search' />
        <input
          onChange={props.searchChange}
          type='text'
          placeholder='Search for a country...'
        />
        <Select
          className='select'
          value={props.selectedOption}
          options={props.options}
          onChange={props.handleCountryChange}
          placeholder='Filter by Region'
        />
      </div>
    );
}

export default Filters;
