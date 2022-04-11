import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../const';
import { isAuthStatusUnknown } from '../helpers';
import { useAppSelector } from '../hooks/index';
import MainScreen from '../pages/main-screen/main-screen';
import LoginScreen from '../pages/login-screen/login-screen';
import MyListScreen from '../pages/my-list-screen/my-list-screen';
import PlayerScreen from '../pages/player-screen/player-screen';
import AddReviewScreen from '../pages/add-review-screen/add-review-screen';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import FilmScreen from '../pages/film-screen/film-screen';
import PrivateRoute from '../components/private-route/private-route';
import LoadingScreen from '../components/loading-screen/loading-screen';


function App(): JSX.Element {

  const { authorizationStatus } = useAppSelector(({ USER }) => USER);
  const { isDataLoaded, films } = useAppSelector(({ DATA }) => DATA);


  if (isAuthStatusUnknown(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<MainScreen />}
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
        element={<FilmScreen />}
      />
      <Route
        path={AppRoute.MyList}
        element={
          <PrivateRoute
            authorizationStatus={authorizationStatus}
          >
            <MyListScreen />
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.PlayerFilm}
        element={<PlayerScreen films={films} />}
      />
      <Route
        path={AppRoute.Review}
        element={
          <PrivateRoute
            authorizationStatus={authorizationStatus}
          >
            <AddReviewScreen films={films} />
          </PrivateRoute>
        }
      />
      <Route
        path="*"
        element={<NotFoundScreen />}
      />
    </Routes>
  );
}

export default App;

