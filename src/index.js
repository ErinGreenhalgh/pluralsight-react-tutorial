import 'babel-polyfill';
//need a polyfill for some features in ES6 that babel can't transpile, like Objet.assign
//you can import separate polyfills as needed to 
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render (
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
