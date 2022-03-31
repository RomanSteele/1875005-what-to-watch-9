import { Film } from '../../types/film';
import { convertTime } from '../../helpers';

type MoviePageDetailsTabProps = {
    film: Film,
}

function MoviePageDetailsTab({ film }: MoviePageDetailsTabProps): JSX.Element {
  const { director, starring, runTime, genre, released } = film;

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {starring.map((item: string, index: number) => {
              if (index === film.starring.length - 1) {
                return (<span key={item}>{item}</span>);
              }
              return (<span key={item}>{item},<br/></span>);
            },
            )}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{convertTime(runTime)}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{released}</span>
        </p>
      </div>
    </div>);
}

export default MoviePageDetailsTab;

