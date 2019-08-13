import React from 'react';
import './CountryCards.css';
import CountryCard from '../CountryCard/CountryCard';

const CountryCards = props => {
  return (
    <div className='grid'>
      {props.countries.map(({ flag, name, population, region, capital }) => {
        return (
          <CountryCard
            img={flag}
            key={name}
            name={name}
            population={population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            region={region}
            capital={capital}
          />
        );
      })}
    </div>
  );
};

export default CountryCards;
