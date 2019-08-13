import React from 'react';
import './Filters.css';
import Select from 'react-select';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Filters = props => {
    return (
      <div className='input-container'>
        <FontAwesomeIcon className='icon' icon={faSearch} />
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
