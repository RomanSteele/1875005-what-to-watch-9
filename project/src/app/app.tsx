import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../const';
import MainScreen from '../pages/main-screen/main-screen';
import LoginScreen from '../pages/login-screen/login-screen';
import MyListScreen from '../pages/my-list-screen/my-list-screen';
import PlayerScreen from '../pages/player-screen/player-screen';
import AddReviewScreen from '../pages/add-review-screen/add-review-screen';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../components/private-route/private-route';
import FilmScreen from '../pages/film-screen/film-screen';
import { isCheckedAuth } from '../helpers';
import { useAppSelector } from '../hooks/index';
import LoadingScreen from '../components/loading-screen/loading-screen';
import HistoryRouter from '../components/history-route/history-route';
import browserHistory from '../browser-history';


function App(): JSX.Element {
  const { authorizationStatus, isDataLoaded, films, promoFilm } = useAppSelector((state) => state);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen promoFilm={promoFilm} films={films}/>}
        />
        <Route
          path={AppRoute.Login}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <LoginScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<FilmScreen  films={films}/>}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <MyListScreen films={films}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerScreen films={films} />}
        />
        <Route
          path={AppRoute.Review}
          element={<AddReviewScreen films={films} />}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </HistoryRouter>);
}

export default App;

