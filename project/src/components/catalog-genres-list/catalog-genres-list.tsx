import { Link } from 'react-router-dom';
import { updateGenre } from '../../store/slices/current-genre-data/current-genre-data';
import { useAppDispatch, useAppSelector } from '../../hooks';

type CatalogGenresListProps = {
  genres: string[];
};

function CatalogGenresList({ genres }: CatalogGenresListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector(({ CURRENT_GENRE }) => CURRENT_GENRE);
  return (
    <>
      {genres.map((item) => (
        <li key={ item } onClick={() => dispatch(updateGenre(item))} className={`catalog__genres-item ${item === currentGenre.genre ? ' catalog__genres-item--active' : ''}`}>
          <Link to={''} className="catalog__genres-link">{item}</Link>
        </li>
      ))}
    </>
  );}

export default CatalogGenresList;
