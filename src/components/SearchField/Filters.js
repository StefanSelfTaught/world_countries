import React from 'react';
import './Filters.css';
import Select from 'react-select';

class Filters extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='input-container'>
        <i className='fas fa-search' />
        <input
          onChange={this.props.searchChange}
          type='text'
          placeholder='Search for a country...'
        />
        <Select
          className='select'
          value={this.props.selectedOption}
          options={this.props.options}
          onChange={this.props.handleCountryChange}
          placeholder='Filter by Region'
        />
      </div>
    );
  }
}

export default Filters;
