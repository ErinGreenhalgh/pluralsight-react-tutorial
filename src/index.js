import 'babel-polyfill';
//need a polyfill for some features in ES6 that babel can't transpile, like Objet.assign
//you can import separate polyfills as needed to
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
//a higher order component that attaches the store to our container components
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore(); //could pass an intial state here, esp if you were creating a server-rendered app

render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')

);

//provider takes store as a prop and wraps our provider component
