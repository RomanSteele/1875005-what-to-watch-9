import { Review } from '../../types/reviews';
import SingleReview from '../single-review/single-review';

type MoviePageReviewsTabProps = {
    reviews: Review[],
}


function MoviePageReviewsTab({ reviews }: MoviePageReviewsTabProps): JSX.Element {

  const sortedReviews = reviews.sort((a, b) => (a.rating > b.rating) ? -1 : 1);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {sortedReviews.map((item) => (
          <SingleReview reviews={item} key={item.id}/>
        )).splice(0, reviews.length/2)}

      </div>
      <div className="film-card__reviews-col">
        {sortedReviews.map((item) => (
          <SingleReview reviews={item} key={item.id}/>
        )).splice(reviews.length/2)}

      </div>
    </div>
  );
}

export default MoviePageReviewsTab;
