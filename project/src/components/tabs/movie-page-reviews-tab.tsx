import { Review } from '../../types/reviews';
import SingleReview from '../single-review/single-review';

type MoviePageReviewsTabProps = {
    reviews: Review[],
}


function MoviePageReviewsTab({ reviews }: MoviePageReviewsTabProps): JSX.Element {

  const sortedReviews = reviews.slice().sort((a, b) => (a.rating > b.rating) ? -1 : 1);

  const sortedReviewsToRender = sortedReviews.map((item) => (
    <SingleReview reviews={item} key={item.id}/>));

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {sortedReviewsToRender.splice(0, Math.ceil(reviews.length / 2))}
      </div>
      <div className="film-card__reviews-col">
        {sortedReviewsToRender.splice(Math.floor(reviews.length / 2)-1)}
      </div>
    </div>
  );
}

export default MoviePageReviewsTab;
