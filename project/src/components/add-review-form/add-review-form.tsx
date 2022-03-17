import { useState } from 'react';
import StarContext from '../../context';
import  RatingStars  from '../../components/rating-stars/rating-stars';
import { useContext } from 'react';


function AddReviewForm( ): JSX.Element {
  const [commentData, setCommentData] = useState('');
  const handleCommentAdd = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const enteredComment = event.target.value;
    setCommentData(enteredComment);
  };

  const stars = useContext(StarContext);

  return (

    <form action="#" className="add-review__form">
      <div className="rating">
        <RatingStars stars={stars}/>
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
