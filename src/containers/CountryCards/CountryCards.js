import React from 'react';
import './CountryCards.css';
import CountryCard from '../../components/CountryCard/CountryCard';

const CountryCards = props => {
  return (
    <div className='grid'>
      {props.countries.map(({ flag, name, population, region, capital }) => {
        return (
          <CountryCard
            img={flag}
            key={name}
            name={name}
            population={population}
            region={region}
            capital={capital}
          />
        );
      })}
    </div>
  );
};

export default CountryCards;
