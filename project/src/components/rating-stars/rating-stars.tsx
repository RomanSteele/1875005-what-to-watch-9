import { Stars } from '../../types/stars';

type RatingStarProps = {
stars: Stars[];
}

function RatingStars({ stars }: RatingStarProps): JSX.Element {
  return (
    <div className="rating__stars">
      {stars.map((item) => (
        <><input className="rating__input" id={`star-${item.id}`} type="radio" name="rating" value={item.id} />
          <label className="rating__label" htmlFor={`star-${item.id}`}>Rating {item.id}</label>
        </>
      ))}
    </div>);
}

export default RatingStars;
