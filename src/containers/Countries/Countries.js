import React, { Component, Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Filters from '../../components/SearchField/Filters';
import CountryCards from '../../components/CountryCards/CountryCards';
import ErrorBoundry from '../../components/ErrorBoundry';
import Spinner from '../../components/Spinner/Spinner';

const options = [
  { value: 'all', label: 'All Countries' },
  { value: 'Africa', label: 'Africa' },
  { value: 'Americas', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' }
];

class Countries extends Component {
  state = {
    countries: [],
    filter: '',
    error: null,
    isLoaded: false,
    selectedOption: { value: 'all', label: 'All countries' },
  };

  componentDidMount() {
    const url = 'https://restcountries.eu/rest/v2/all?fields=name;capital;population;region;flag';
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
  };

  render() {
    const { filter, error, isLoaded, selectedOption } = this.state;
    let filteredCountries;
    filteredCountries = this.state.countries.filter(country => {
      if(selectedOption['value'] !== 'all'){
        return country.region === selectedOption['value'];
      } else {
        return filteredCountries = this.state.countries
      }
    })

    filteredCountries = filteredCountries.filter(country => {
        return country.name.toLowerCase().includes(filter.toLowerCase());
    });

    let countries;
    !isLoaded
      ? (countries = <Spinner />)
      : (countries = <CountryCards countries={filteredCountries} />);

    if (error) {
      return <h1>Error: Something went wrong</h1>;
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

export default Countries;
