import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import { films } from './mocks/films';
import { stars } from './mocks/stars';


ReactDOM.render(
  <React.StrictMode>
    <App  films={films} stars={stars}/>
  </React.StrictMode>,
  document.getElementById('root'));
