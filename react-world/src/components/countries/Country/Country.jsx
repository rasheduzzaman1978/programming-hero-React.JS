import React, { useState } from 'react';

import './Country.css'


const Country = ({country, handleVisitedCountries, handleVisitedFlag}) => {
  // console.log(country);

  const [visited, setVisited] = useState(false);


  const handleVisited = () => {
    // console.log('btn clicked');
    // Basic system
  //   if (visited) {
  //     setVisited(false)
  //   } else {
  //   setVisited(true)
  // }
  // Or Second System
  // setVisited (visited ? false : true);
  // Or Third System
  if (!visited) {
    handleVisitedCountries(country);
  }
  setVisited(!visited);
};

  return (
    // <div className={`country border-lg text-center ${visited ? 'country-visited' : 'country-not-visited'}`}>
    <div className={`country ${visited && 'country-visited'}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt}></img>
      <h3>Name: {country.name.common} </h3>
      <h3>Capital: {country.capital.capital} </h3>
      <h3>Continents: {country.continents.continents} </h3>
      <h3>
  Currencies: {Object.values(country.currencies.currencies)
    .map((currency) => `${currency.name} (${currency.symbol})`)
    .join(", ")}
</h3>
    <h3>
  Languages: {Object.values(country.languages.languages).join(", ")}
</h3>
      <h3>Population: {country.population.population} </h3>
      <h3>Region: {country.region.region} </h3>
      <h3>Area: {country.area.area} {country.area.area > 300000 ? 'Big Country' : 'Small Country'} </h3>
      <button onClick={handleVisited}>
        {visited ? 'Visited' : 'Not Visited'}
      </button>
      <button onClick={() => {handleVisitedFlag(country.flags.flags.png)}}>Add Visited Flag</button>

    </div>
  );
};

export default Country;