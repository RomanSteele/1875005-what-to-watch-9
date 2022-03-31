import { Film } from '../../types/film';
import SingleFilmCard from '../single-card/single-card';


type FilmsListProps = {
  films: Film[];
};

function FilmsList({ films }: FilmsListProps) {

  return (
    <>
      {films.map((item) => (
        <SingleFilmCard film={item} key={item.id}/>
      ))}
    </>
  );
}
export default FilmsList;
