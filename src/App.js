import React, { Component, Fragment } from 'react';
import Countries from './containers/Countries/Countries';
import { Route, Switch, Redirect } from "react-router-dom";
import CountryDetails from "./components/CountryDetails/CountryDetails";

class App extends Component {
  render () {
    return (
      <Fragment>
        <Switch>
          <Redirect exact from="/" to="countries" />
          <Route exact path="/countries" component={Countries}></Route>
          <Route exact path="/countries/:countryName" component={CountryDetails}></Route>
        </Switch>
      </Fragment>
    );
  }
}

export default App;
