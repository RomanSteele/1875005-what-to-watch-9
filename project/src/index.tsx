import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import { reviews } from './mocks/reviews';
import { Provider } from 'react-redux';
import { store } from './store/index';

import { fetchFilmsAction, checkAuthAction } from './store/api-actions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchFilmsAction());
store.dispatch(checkAuthAction());

function Main() {

  return (
    <React.StrictMode>
      <Provider store={ store }>
        <ToastContainer />
        <App   reviews={reviews}/>
      </Provider>
    </React.StrictMode>);

}

ReactDOM.render(
  <Main />,
  document.getElementById('root'));
