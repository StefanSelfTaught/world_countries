import React, { Fragment, Component } from 'react';
import Navbar from '../Navbar/Navbar';
import './CountryDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

class CountryDetails extends Component {

  state = {
    specificCountry: [],
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    fetch(`https://restcountries.com/v2/name/${params.countryName}?fullText=true`)
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          specificCountry: data,
        })
      )
  }

  handleClick = () => {
    this.props.history.goBack();
  }

  render(){
    const { specificCountry } = this.state;
    let name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, img, borders, timezones;
    specificCountry.map(country => {
     return (
      name = country.name,
      img = country.flag,
      nativeName = country.nativeName,
      population = country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      region = country.region,
      subregion = country.subregion,
      capital = country.capital,
      topLevelDomain = country.topLevelDomain,
      currencies = country.currencies[0].code,
      languages = country.languages.map(lng => lng.name + ', '),
      timezones = country.timezones[0],
      borders = country.borders.map(border => border + ', ')
      )
    })

    return (
      <Fragment>
        <Navbar />
        <div className="detailsContainer">
          <button className="btn" onClick={this.handleClick}>
            <FontAwesomeIcon icon={faArrowLeft} className="iconArrow"/>
            Back
          </button>
          <div className="info-main">
           <img src={img} alt="flag" />
            <div className="info1">
              <h1>{name}</h1>
              <ul>
                <li><span>Native Name:</span> {nativeName}</li>
                <li><span>Population:</span> {population}</li>
                <li><span>Region:</span> {region}</li>
                <li><span>Sub Region:</span> {subregion}</li>
                <li><span>Capital:</span> {capital}</li>
                <li><span>Border Countries:</span> {borders}</li>
              </ul>
            </div>
            <div className="info2">
              <ul>
                <li><span>Top Level Domain:</span> {topLevelDomain}</li>
                <li><span>Currencies:</span> {currencies}</li>
                <li><span>Languages:</span> {languages}</li>
                <li><span>Time Zones:</span> {timezones}</li>
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
      )
    }
};

export default CountryDetails;
