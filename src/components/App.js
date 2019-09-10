/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import Loader from './Loader/Loader';
import Nav from './Nav/Nav';

import st from './App.module.css';

const AsyncHome = Loadable({
  loader: () =>
    import('../pages/HomePage/HomePage' /* webpackChunkName: "home-page" */),
  loading: Loader,
});

const AsyncPets = Loadable({
  loader: () =>
    import('../pages/PetsPage/PetsPage' /* webpackChunkName: "pets-page" */),
  loading: Loader,
});

const AsyncPet = Loadable({
  loader: () =>
    import('../pages/PetPage/PetPage' /* webpackChunkName: "pet-page" */),
  loading: Loader,
});

const AsyncAbout = Loadable({
  loader: () =>
    import('../pages/AboutPage/AboutPage' /* webpackChunkName: "about-page" */),
  loading: Loader,
});

const AsyncNotFound = Loadable({
  loader: () =>
    import('./NotFound/NotFound' /* webpackChunkName: "notfound-page" */),
  loading: Loader,
});

class App extends Component {
  render() {
    return (
      <div className={st.containerApp}>
        <Nav />
        <Switch>
          <Route path="/" exact component={AsyncHome} />
          <Route path="/pets/:id" component={AsyncPet} />
          <Route path="/pets" component={AsyncPets} />
          <Route path="/about" component={AsyncAbout} />
          <Route component={AsyncNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
