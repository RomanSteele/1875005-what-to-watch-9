import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import { reviews } from './mocks/reviews';

import { Provider } from 'react-redux';
import { store } from './store/index';

import { fetchFilmsAction } from './store/api-actions';


store.dispatch(fetchFilmsAction());

function Main() {

  return (
    <React.StrictMode>
      <Provider store={ store }>
        <App   reviews={reviews}/>
      </Provider>
    </React.StrictMode>);

}

ReactDOM.render(
  <Main />,
  document.getElementById('root'));
