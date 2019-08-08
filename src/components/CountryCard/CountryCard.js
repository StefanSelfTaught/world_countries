import React from 'react';
import './CountryCard.css';

const CountryCard = props => {
  return (
    <div className='country-card'>
      <img src={props.img} alt='text' />
      <div className='info'>
        <h3>{props.name}</h3>
        <ul>
          <li>
            Population: <span>{props.population}</span>
          </li>
          <li>
            Region: <span>{props.region}</span>
          </li>
          <li>
            Capital: <span>{props.capital}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CountryCard;
