import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/index';
import { AppRoute } from '../../const';
import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import UserBlock from '../../components/user-block/user-block';
import MainPageContent  from '../../components/main-page-content/main-page-content';


function MainScreen(): JSX.Element {

  const navigate = useNavigate();
  const { promoFilm } = useAppSelector(({ DATA }) => DATA);
  const { posterImage, name, genre, released } = promoFilm;

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={posterImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />
          <UserBlock />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button onClick={() => {
                  navigate(`${AppRoute.PlayerFilm}${promoFilm.id}`);
                }}className="btn btn--play film-card__button" type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <MainPageContent />
        <Footer />
      </div>
    </>
  );
}

export default MainScreen;
