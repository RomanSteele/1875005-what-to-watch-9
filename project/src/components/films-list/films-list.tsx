
import { Film } from '../../types/film';
import SingleFilmCard from '../single-card/single-card';


type FilmsListProps = {
  films: Film[];
};

function FilmsList({ films }: FilmsListProps) {

  return (
    <div className="catalog__films-list" >
      {films.map((item) => (
        <SingleFilmCard film={item} key={item.id}/>
      ))}
    </div>
  );
}
export default FilmsList;
