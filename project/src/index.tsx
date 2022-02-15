import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Settings = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};


ReactDOM.render(
  <React.StrictMode>
    <App  title = {Settings.title} genre = {Settings.genre} year = {Settings.year} />
  </React.StrictMode>,
  document.getElementById('root'));
