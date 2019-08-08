import React, { Component, Fragment } from 'react';
import Navbar from './components/Navbar/Navbar';
import SearchField from './components/SearchField/SearchField';
import CountryCards from './containers/CountryCards/CountryCards';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <SearchField />
        <CountryCards />
      </Fragment>
    );
  }
}

export default App;
