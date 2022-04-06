import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { Film } from '../../types/film';
import FilmsList from '../../components/films-list/films-list';
import CatalogGenresList from '../../components/catalog-genres-list/catalog-genres-list';

const FILMS_PER_STEP = 8;


type MainPageContentProps = {
  films: Film[];
}

function MainPageContent({ films }: MainPageContentProps): JSX.Element {

  const [genres, setGenres] = useState<string[]>([]);
  const currentGenre = useAppSelector(({ ACTION }) => ACTION);
  const filmsOfGenre = films.filter(({ genre }) => currentGenre.genre === 'All genres' || currentGenre.genre === genre);

  useEffect(() => {
    setGenres(['All genres', ...new Set(films.map(({ genre }) => genre))]);
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
        <FilmsList films={filmsOfGenre.slice(0, step)} />
      </div>

      {(filmsOfGenre.length > step) &&
      <div className="catalog__more">
        <button onClick={handleShowMoreFilms} className="catalog__button" type="button">Show more</button>
      </div>}
    </section>
  );
}
export default MainPageContent;
