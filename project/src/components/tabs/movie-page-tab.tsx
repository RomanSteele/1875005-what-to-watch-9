import { Film } from '../../types/film';

type MoviePageTabProps = {
    film: Film,
}

const RANK_TITLES = [
  { rank: 10, title: 'Awesome' },
  { rank: 8, title: 'Very good' },
  { rank: 5, title: 'Good' },
  { rank: 3, title: 'Normal' },
  { rank: 0, title: 'Bad' },
];

const getRankTitle= (rating: number) => RANK_TITLES.find(({ rank }) => rank <= rating)?.title ?? '';

function MoviePageTab({ film }: MoviePageTabProps): JSX.Element {

  const { rating, scoresCount, description, director, starring } = film;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRankTitle(film.rating)}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {starring.join(', ')}</strong> and other</p>
      </div>
    </>
  );
}

export default MoviePageTab;
