import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  Title: 'The Grand Budapest Hotel',
  Genre: 'Drama',
  Year: 2014,
} as const;


ReactDOM.render(
  <React.StrictMode>
    <App  title = {Setting.Title} genre = {Setting.Genre} year = {Setting.Year} />
  </React.StrictMode>,
  document.getElementById('root'));
