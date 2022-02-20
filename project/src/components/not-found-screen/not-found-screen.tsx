import { Link } from 'react-router-dom';

function NotFoundScreen(): JSX.Element{
  return(
    <div className="user-page">
      <header className="page-header user-page__head">
      </header>
      <div className="page-title">
        <h1 className="page-title user-page__title">404 - Not Found!</h1>
        <Link to="/" className="logo__link">
          <span className="logo__letter logo__letter--1">&#8658;W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W&#8656;</span>
        </Link>
      </div>
    </div>

  );
}

export default NotFoundScreen;
