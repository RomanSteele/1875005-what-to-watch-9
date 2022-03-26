import { Film } from '../../types/film';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks';
import FilmsList from '../../components/films-list/films-list';
import CatalogGenresList from '../../components/catalog-genres-list/catalog-genres-list';

const FILMS_PER_STEP = 8;
let filmsToRender: Film[] = [];

type MainPageContentProps = {
  films: Film[];
}

function MainPageContent({ films }: MainPageContentProps): JSX.Element {
  const [genres, setGenres] = useState<string[]>([]);
  const currentGenre = useAppSelector((state) => state.genre);
  const filmsOfGenre = films.filter(({ genre }) => currentGenre === 'All genres' || currentGenre === genre);

  useEffect(() => {
    setGenres(['All genres', ...new Set(films.map(({ genre }) => genre))]);
  }, [films]);

  const [shownFilms, setShownFilms] = useState<Film[]>([]);
  const [step, setStep] = useState(FILMS_PER_STEP);

  const loopWithSlice = (start: number, end: number) => {
    const slicedFilms = filmsOfGenre.slice(start, end);
    filmsToRender = [...filmsToRender, ...slicedFilms];
    setShownFilms(filmsToRender);
  };

  const changeGenre = () => {
    filmsToRender = [];
    setStep(FILMS_PER_STEP);
  };

  useEffect(() => {
    changeGenre();
  }, [currentGenre]);

  useEffect(() => {
    loopWithSlice(0, FILMS_PER_STEP);
  }, [currentGenre]);

  const handleShowMoreFilms = () => {
    loopWithSlice(step, step + FILMS_PER_STEP);
    setStep(step + FILMS_PER_STEP);
  };

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <ul className="catalog__genres-list">
        <CatalogGenresList genres={genres}/>
      </ul>

      <div className="catalog__films-list">
        <FilmsList films={shownFilms} />
      </div>

      {(filmsOfGenre.length > FILMS_PER_STEP && shownFilms.length !== filmsOfGenre.length) &&
      <div className="catalog__more">
        <button onClick={handleShowMoreFilms} className="catalog__button" type="button">Show more</button>
      </div>}
    </section>
  );
}
export default MainPageContent;
