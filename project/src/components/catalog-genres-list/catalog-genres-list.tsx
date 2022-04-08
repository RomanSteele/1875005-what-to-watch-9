import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { updateGenre } from '../../store/slices/action-data/action-data';

const GENRE_START = 0;
const MAX_GENRE_LENGTH = 10;

type CatalogGenresListProps = {
  genres: string[];
};

function CatalogGenresList({ genres }: CatalogGenresListProps): JSX.Element {

  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector(({ ACTION }) => ACTION);

  return (
    <>
      {genres.map((item) => (
        <li key={ item } onClick={() => dispatch(updateGenre(item))} className={`catalog__genres-item ${item === currentGenre.genre ? ' catalog__genres-item--active' : ''}`}>
          <Link to={''} className="catalog__genres-link">{item}</Link>
        </li>
      )).splice(GENRE_START, MAX_GENRE_LENGTH)}
    </>
  );}

export default CatalogGenresList;
