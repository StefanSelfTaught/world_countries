import React, { Component, Fragment } from 'react';
import Navbar from './components/Navbar/Navbar';
import SearchField from './components/SearchField/SearchField';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <SearchField />
      </Fragment>
    );
  }
}

export default App;
