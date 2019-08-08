import React from 'react';
import './SearchField.css';
import Filter from '../Filter/Filter';

const SearchField = props => {
  return (
    <div className='input-container'>
      <i className='fas fa-search' />
      <input
        onChange={props.searchChange}
        type='text'
        placeholder='Search for a country...'
      />
      <Filter />
    </div>
  );
};

export default SearchField;
