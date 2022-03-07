import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {films} from './mocks/films';


ReactDOM.render(
  <React.StrictMode>
    <App  films = {films} film={films[1]}/>
  </React.StrictMode>,
  document.getElementById('root'));
