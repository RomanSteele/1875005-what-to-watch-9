import { useState } from 'react';
import  RatingStars  from '../../components/rating-stars/rating-stars';


function AddReviewForm( ): JSX.Element {
  const [commentData, setCommentData] = useState('');
  const handleCommentAdd = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const enteredComment = event.target.value;
    setCommentData(enteredComment);
  };


  return (

    <form action="#" className="add-review__form">
      <div className="rating">
        <RatingStars />
      </div>

      <div className="add-review__text">
        <textarea onChange={handleCommentAdd} value={commentData} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
        {commentData}
      </div>
    </form>
  );}

export default AddReviewForm;
