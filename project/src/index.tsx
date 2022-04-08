import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app/app';
import { store } from './store/index';

import { fetchFilmsAction, checkAuthAction, fetchPromoAction, fetchUserAction   } from './store/api-actions';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchFilmsAction());
store.dispatch(checkAuthAction());
store.dispatch(fetchPromoAction());
store.dispatch(fetchUserAction());

function Main() {

  return (
    <React.StrictMode>
      <Provider store={ store }>
        <ToastContainer />
        <App  />
      </Provider>
    </React.StrictMode>);
}

ReactDOM.render(
  <Main />,
  document.getElementById('root'));
