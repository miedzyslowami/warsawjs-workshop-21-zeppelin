import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import * as api from './api';
import { withStyles, CssBaseline } from '@material-ui/core';
import * as urls from './urls';
import LoginPage from './containers/LoginPage';
import Layout from './containers/Layout';

window.api = api;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <CssBaseline>
          <Route path={ urls.LOGIN } exact component={ LoginPage }/>
          <Route path={ urls.ROOT } component={ Layout }/>
        </CssBaseline>
    </BrowserRouter>);
  }
}

export default App;
