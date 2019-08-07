import React from 'react';
import './SearchField.css';
import Filter from '../Filter/Filter';

const SearchField = () => {
  return (
    <div className='input-container'>
      <i class='fas fa-search' />
      <input type='text' placeholder='Search for a country...' />
      <Filter />
    </div>
  );
};

export default SearchField;
