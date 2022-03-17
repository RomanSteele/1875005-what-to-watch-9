import { useState } from 'react';
import { Film } from '../../types/film';
import SingleFilmCard from '../single-card/single-card';

type MyFilmsListProps = {
  films: Film[];
};

function MyFilmsList({ films }: MyFilmsListProps) {
  const [selectedFilm, setSelectedFilm] = useState<null | number>(null);
  const handleMouseEnter = (id: number) => {
    setSelectedFilm(id);
  };
  return (
    <div className="catalog__films-list" >
      {films.map((item) => (
        <article className="small-film-card catalog__films-card"  key={item.id} onMouseEnter={() => {handleMouseEnter(item.id);}}>
          <SingleFilmCard
            film={item}
          />
        </article>
      ))}
      {selectedFilm}
    </div>
  );
}
export default MyFilmsList;
