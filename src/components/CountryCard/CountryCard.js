import React from 'react';
import './CountryCard.css';
import { Link } from 'react-router-dom';

const CountryCard = props => {
  return (
    <div className='country-card'>
    <Link
      className="link" 
      to={`/countries/${props.name}`}
    >
      <img src={props.img} alt='text' />
      <div className='info'>
        <h3>{props.name}</h3>
        <ul>
          <li>
            <span>Population</span>: {props.population}
          </li>
          <li>
            <span>Region</span>: {props.region}
          </li>
          <li>
            <span>Capital</span>: {props.capital}
          </li>
        </ul>
      </div>
      </Link>
    </div>
  );
};

export default CountryCard;
