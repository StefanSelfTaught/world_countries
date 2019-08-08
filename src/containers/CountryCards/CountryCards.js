import React from 'react';
import './CountryCards.css';
import CountryCard from '../../components/CountryCard/CountryCard';

const CountryCards = () => {
  return (
    <div className='grid'>
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
    </div>
  );
};

export default CountryCards;
