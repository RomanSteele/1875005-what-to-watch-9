import { Film } from '../../types/film';
import { Link } from 'react-router-dom';

type SingleCardScreenProps = {
  film: Film;
}

function SingleCard({ film }: SingleCardScreenProps): JSX.Element {
  const { name, previewImage, id } = film;
  return (
    <>
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </>
  );
}

export default SingleCard;
