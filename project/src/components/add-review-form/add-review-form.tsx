import React, { FormEvent, useState } from 'react';
import { postComment } from '../../store/api-actions';
import { CommentPost } from '../../types/comment-post';
import { store } from '../../store';
import { STARS } from '../../const';
import { useParams, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';


const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 400;


function AddReviewForm(): JSX.Element {

  const navigate = useNavigate();
  const params = useParams();
  const [commentData, setCommentData] = useState<string>('');
  const [ratingData, setRatingData] = useState<number>(0);

  const handleCommentAdd = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const enteredComment = event.target.value;
    setCommentData(enteredComment);
  };

  const hanldeMouseClick = (id: number) => {
    setRatingData(id);
  };

  const onSubmit = ({ id, comment, rating }: CommentPost) => {
    store.dispatch(postComment({ id, comment, rating }));
  };

  const id = Number(params.id);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if ( commentData !== '' || commentData.length > MIN_COMMENT_LENGTH || commentData.length < MAX_COMMENT_LENGTH) {
      onSubmit(
        {
          id: id,
          rating: ratingData,
          comment: commentData,
        });
      navigate(`${AppRoute.FilmPage}/${id}`);
    }
  };


  return (
    <form onSubmit={handleSubmit} action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {STARS.map((item) => (
            <React.Fragment key={item.id}>
              <input onClick={() => {hanldeMouseClick(item.id);}} key={item.id} className="rating__input" id={`star-${item.id}`} type="radio" name="rating" value={item.id}/>
              <label className="rating__label" htmlFor={`star-${item.id}`}>Rating {item.id}</label>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea onChange={handleCommentAdd} value={commentData} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
        <div className="add-review__submit">
          {(ratingData === null || commentData === '') ?
            <button className="add-review__btn" type="submit" disabled>Post</button> :
            <button className="add-review__btn" type="submit">Post</button>}
        </div>
        {commentData}
      </div>
    </form>
  );

}

export default AddReviewForm;
