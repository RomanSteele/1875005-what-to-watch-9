
import { Film } from '../../types/film';
import SingleFilmCard from '../single-card/single-card';

type MyFilmsListProps = {
  films: Film[];
};

function MyFilmsList({ films }: MyFilmsListProps) {

  return (
    <>
      {films.map((item) => (
        <SingleFilmCard film={item} key={item.id}/>
      ))}
    </>
  );
}
export default MyFilmsList;
