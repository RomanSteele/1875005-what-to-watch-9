import { Review } from '../../types/reviews';
import dayjs from 'dayjs';


type SingleReviewProps = {
  reviews: Review;
}


function SingleReview({ reviews }: SingleReviewProps): JSX.Element {

  const { comment, date,  rating, user } = reviews;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={date}>{dayjs(date).format('MMMM D, YYYY')}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating.toString().replace('.', ',')}</div>
    </div>
  );
}

export default SingleReview;
