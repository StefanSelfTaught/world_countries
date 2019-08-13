import React, { Component, Fragment, Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Spinner from './components/Spinner/Spinner';

const Countries = lazy(() => import('./containers/Countries/Countries'));
const CountryDetails = lazy(() => import('./components/CountryDetails/CountryDetails'));

class App extends Component {
  render () {
    return (
      <Fragment>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Redirect exact from="/" to="countries" />
            <Route exact path="/countries" component={Countries}></Route>
            <Route exact path="/countries/:countryName" component={CountryDetails}></Route>
          </Switch>
        </Suspense>
      </Fragment>
    );
  }
}

export default App;
