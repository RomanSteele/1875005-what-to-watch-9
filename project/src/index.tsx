import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import { films } from './mocks/films';
import { stars } from './mocks/stars';
import { reviews } from './mocks/reviews';
import StarContext from './context';

function Main() {
  return (
    <React.StrictMode>
      <StarContext.Provider value={ stars }>
        <App  films={films} reviews={reviews}/>
      </StarContext.Provider>
    </React.StrictMode>);

}

ReactDOM.render(
  <Main />,
  document.getElementById('root'));
