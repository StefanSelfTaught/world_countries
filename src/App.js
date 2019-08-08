import React, { Component, Fragment } from 'react';
import Navbar from './components/Navbar/Navbar';
import SearchField from './components/SearchField/SearchField';
import CountryCards from './containers/CountryCards/CountryCards';
import ErrorBoundry from './components/ErrorBoundry';

class App extends Component {
  state = {
    countries: [],
    filter: '',
    error: null,
    isLoaded: false
  };

  componentDidMount() {
    const url = 'https://restcountries.eu/rest/v2/all';
    fetch(url)
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          countries: data,
          isLoaded: true
        })
      )
      .catch(err =>
        this.setState({
          error: true
        })
      );
  }

  handleChange = e => {
    try {
      this.setState({
        filter: e.target.value
      });
    } catch (error) {
      this.setState({
        error: true
      });
    }
  };

  render() {
    const { filter, error, isLoaded } = this.state;
    const filteredCountries = this.state.countries.filter(country => {
      return country.name.toLowerCase().includes(filter.toLowerCase());
    });

    let countries;
    !this.state.isLoaded
      ? (countries = <h1>Loading...</h1>)
      : (countries = <CountryCards countries={filteredCountries} />);

    if (error) {
      return <h1>Error: Something went wrong </h1>;
    } else {
      return (
        <Fragment>
          <Navbar />
          <SearchField searchChange={this.handleChange} />
          <ErrorBoundry>{countries}</ErrorBoundry>
        </Fragment>
      );
    }
  }
}

export default App;
