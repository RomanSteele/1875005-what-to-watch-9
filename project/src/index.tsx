import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app/app';
import { store } from './store/index';
import { fetchFilmsAction, checkAuthAction, fetchPromoAction, fetchUserAction   } from './store/api-actions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HistoryRouter from '../src/components/history-route/history-route';
import browserHistory from './browser-history';

store.dispatch(fetchFilmsAction());
store.dispatch(checkAuthAction());
store.dispatch(fetchPromoAction());
store.dispatch(fetchUserAction());

function Main() {

  return (
    <React.StrictMode>
      <Provider store={ store }>
        <HistoryRouter history={browserHistory}>
          <ToastContainer />
          <App  />
        </HistoryRouter>
      </Provider>
    </React.StrictMode>);
}

ReactDOM.render(
  <Main />,
  document.getElementById('root'));
