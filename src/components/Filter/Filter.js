import React from 'react';
import './Filter.css';

const Filter = () => {
  return (
    <div className='filter'>
      <select>
        <option value='volvo'>All Countries</option>
        <option value='saab'>America</option>
        <option value='mercedes'>Asia</option>
        <option value='audi'>Europe</option>
        <option value='audi'>Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
