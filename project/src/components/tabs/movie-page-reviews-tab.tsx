import { Review } from '../../types/reviews';
import SingleReview from '../single-review/single-review';

type MoviePageReviewsTabProps = {
    reviews: Review[],
}

function MoviePageReviews({ reviews }: MoviePageReviewsTabProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((item) => (
          <SingleReview reviews={item} key={item.id}/>
        ))}

      </div>
    </div>
  );
}

export default MoviePageReviews;
