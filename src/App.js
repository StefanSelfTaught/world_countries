import React, { Component, Fragment } from 'react';
import Navbar from './components/Navbar/Navbar';
import Filters from './components/SearchField/Filters';
import CountryCards from './containers/CountryCards/CountryCards';
import ErrorBoundry from './components/ErrorBoundry';

const options = [
  { value: 'all', label: 'All Countries' },
  { value: 'Africa', label: 'Africa' },
  { value: 'Americas', label: 'Americas' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' }
];

class App extends Component {
  state = {
    countries: [],
    filter: '',
    error: null,
    isLoaded: false,
    selectedOption: { value: 'all', label: 'All countries' },
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

  handleCountryChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  render() {

     const { filter, error, isLoaded } = this.state;
        let filteredCountries = this.state.countries.filter(country => {
      return country.name.toLowerCase().includes(filter.toLowerCase());
    });

    filteredCountries = this.state.countries.filter(country => {
      if(this.state.selectedOption['value'] !== 'all'){
        return country.region === this.state.selectedOption['value'];
      } else {
        return filteredCountries = this.state.countries
      }
    })

    let countries;
    !isLoaded
      ? (countries = <h1>Loading...</h1>)
      : (countries = <CountryCards countries={filteredCountries} />);

    if (error) {
      return <h1>Error: Something went wrong </h1>;
    } else {
      return (
        <Fragment>
          <Navbar />
          <Filters
            searchChange={this.handleChange}
            handleCountryChange={this.handleCountryChange}
            selectedOption={this.state.selectedOption}
            options={options}
          />
          <ErrorBoundry>{countries}</ErrorBoundry>
        </Fragment>
      );
    }
  }
}

export default App;
