import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks';

import { GenresStart } from '../../const';

import FilmsList from '../../components/films-list/films-list';
import CatalogGenresList from '../../components/catalog-genres-list/catalog-genres-list';

const FILMS_PER_STEP = 8;


function MainPageContent(): JSX.Element {

  const [genres, setGenres] = useState<string[]>([]);
  const films = useAppSelector(({ DATA }) => DATA.films);
  const currentGenre = useAppSelector(({ ACTION }) => ACTION);
  const filmsOfGenreArray = films.filter(({ genre }) => currentGenre.genre === GenresStart.AllGenres || currentGenre.genre === genre);

  useEffect(() => {
    setGenres([GenresStart.AllGenres, ...new Set(films.map(({ genre }) => genre))]);
  }, [films]);

  const [step, setStep] = useState(FILMS_PER_STEP);

  useEffect(() => {
    setStep(FILMS_PER_STEP);
  }, [currentGenre]);

  const handleShowMoreFilms = () => {
    setStep(step + FILMS_PER_STEP);
  };

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <ul className="catalog__genres-list">
        <CatalogGenresList genres={genres}/>
      </ul>

      <div className="catalog__films-list">
        <FilmsList films={filmsOfGenreArray.slice(0, step)} />
      </div>

      {(filmsOfGenreArray.length > step) &&
      <div className="catalog__more">
        <button onClick={handleShowMoreFilms} className="catalog__button" type="button">Show more</button>
      </div>}
    </section>
  );
}
export default MainPageContent;
