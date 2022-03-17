
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import { Film } from '../../types/film';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import { Review } from '../../types/reviews';
import Tabs from '../../components/tabs/tabs';
import SingleFilmCard from '../../components/single-card/single-card';
import { useParams } from 'react-router-dom';

type FilmScreenProps = {
  reviews: Review[];
  films: Film[];
};


function FilmScreen({ reviews, films }: FilmScreenProps): JSX.Element {

  const { id } = useParams() as {
    id: string;
  };
  const film = films[parseInt(id, 10)];

  const { name, posterImage, genre, released } = film;
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={posterImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />

            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
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
                <Link className="btn film-card__button"to={`/films/${id}/review`}>Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <Tabs film={film} reviews={reviews}/>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">
            {films.map((item) => (
              film.genre === item.genre && <SingleFilmCard film={item} key={item.id} />
            ))}
          </div>
        </section>
        <Footer />
      </div>
    </>);
}

export default FilmScreen;
