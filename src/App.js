import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import * as api from './api';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducer from './reducers';
import { withStyles, CssBaseline, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import * as urls from './urls';
import LoginPage from './containers/LoginPage';
import Layout from './containers/Layout';


const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk)));

const theme = createMuiTheme({
  palette: {
    primary: { main: '#031926' },
    secondary: { main: '#468189' },
  },
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <CssBaseline>
            <MuiThemeProvider theme={theme}>
            <Switch>
              <Route path={ urls.LOGIN } exact component={ LoginPage }/>
              <Route path={ urls.ROOT } component={ Layout }/>
          </Switch>
        </MuiThemeProvider>
          </CssBaseline>
      </BrowserRouter>
    </Provider>);
  }
}

export default App;
