import {useState} from 'react';
import {Film} from '../../types/film';
import SingleFilmCard from '../single-card/single-card';

type FilmsListProps = {
  films: Film[];
};

function FilmsList({films}: FilmsListProps) {
  const [selectedFilm, setSelectedFilms] = useState<null | number>(null);
  const handleMouseOver = (id: number) => {
    setSelectedFilms(id);
  };
  return (
    <div className="catalog__films-list" >
      {films.map((item) => (
        <article className="small-film-card catalog__films-card"  key = {item.id} onMouseEnter={() => {handleMouseOver(item.id);}}>
          <SingleFilmCard
            film = {item}
          />
        </article>
      ))}
      {selectedFilm}
    </div>
  );
}
export default FilmsList;
