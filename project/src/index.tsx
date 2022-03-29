import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import { stars } from './mocks/stars';
import { reviews } from './mocks/reviews';
import StarContext from './context';

import { Provider } from 'react-redux';
import { store } from './store/index';

import { fetchFilmsAction } from './store/api-actions';


store.dispatch(fetchFilmsAction());

function Main() {

  return (
    <React.StrictMode>
      <Provider store={ store }>
        <StarContext.Provider value={ stars }>
          <App   reviews={reviews}/>
        </StarContext.Provider>
      </Provider>
    </React.StrictMode>);

}

ReactDOM.render(
  <Main />,
  document.getElementById('root'));
