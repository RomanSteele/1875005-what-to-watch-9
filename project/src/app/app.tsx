import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';
import MainScreen from '../pages/main-screen/main-screen';
import LoginScreen from '../pages/login-screen/login-screen';
import MyListScreen from '../pages/my-list-screen/my-list-screen';
import PlayerScreen from '../pages/player-screen/player-screen';
import AddReviewScreen from '../pages/add-review-screen/add-review-screen';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../components/private-route/private-route';
import FilmScreen from '../pages/film-screen/film-screen';
import { Review } from '../types/reviews';

import { useAppSelector } from '../hooks/index';
import LoadingScreen from '../components/loading-screen/loading-screen';

type AppScreenProps = {
  //films: Film[];
  reviews: Review[];
}

function App({  reviews }: AppScreenProps): JSX.Element {
  const { isDataLoaded, films } = useAppSelector((state) => state);
  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen  films={films}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Film}
          element={<FilmScreen reviews={reviews} films={films}/>}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Authorized}
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
    </BrowserRouter>);
}

export default App;

