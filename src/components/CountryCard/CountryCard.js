import React from 'react';
import './CountryCard.css';

const CountryCard = () => {
  return (
    <div className='country-card'>
      <img src='https://source.unsplash.com/random/200x200' alt='text' />
      <div className='info'>
        <h3>Germany</h3>
        <ul>
          <li>
            Population: <span>81,770,900</span>
          </li>
          <li>
            Region: <span>Europe</span>
          </li>
          <li>
            Capital: <span>Berlin</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CountryCard;
