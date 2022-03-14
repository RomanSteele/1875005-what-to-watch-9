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
import { Film } from '../types/film';
import { Review } from '../types/reviews';

type AppScreenProps = {
  films: Film[];
  reviews: Review[];
}

function App({ films, reviews }: AppScreenProps): JSX.Element {
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
          element={<FilmScreen film={films[0]} reviews={reviews}/>}
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
          element={<PlayerScreen film={films[0]} />}
        />
        <Route
          path={AppRoute.Review}
          element={<AddReviewScreen film={films[0]} />}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>);
}

export default App;

