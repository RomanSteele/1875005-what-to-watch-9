import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function UserBlockSignIn(): JSX.Element {

  return (
    <Link to={AppRoute.Login} className="user-block__link" type="button">Sign in</Link>
  );
}

export default UserBlockSignIn;
