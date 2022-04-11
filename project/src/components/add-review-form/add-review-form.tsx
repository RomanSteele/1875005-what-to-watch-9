import React, { FormEvent, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { STARS } from '../../const';
import { store } from '../../store';
import { postComment } from '../../store/api-actions';
import { CommentPost } from '../../types/comment-post';
import {  useAppSelector } from '../../hooks';

const enum CommentLength {
  Min = 50,
  Max = 400,
}

const enum StarsStart {
  start = 0,
}

function AddReviewForm(): JSX.Element {

  const params = useParams();
  const [commentData, setCommentData] = useState<string>('');
  const [ratingData, setRatingData] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const sendStatus = useAppSelector(({ ACTION }) => ACTION.isLoading);

  const handleCommentAdd = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const enteredComment = event.target.value;
    setCommentData(enteredComment);
  };

  const hanldeMouseClick = (id: number) => {
    setRatingData(id);
  };

  const sendOnSubmit = ({ id, comment, rating }: CommentPost) => {
    store.dispatch(postComment({ id, comment, rating }));

  };

  const id = Number(params.id);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if ( !isDisabled ) {
      sendOnSubmit(
        {
          id: id,
          rating: ratingData,
          comment: commentData,
        });
    }
  };

  useEffect (() => {
    setIsDisabled(
      ratingData === StarsStart.start ||
      commentData.length < CommentLength.Min ||
      commentData.length > CommentLength.Max,
    );
  }, [ ratingData, commentData ]);

  return (
    <form onSubmit={handleSubmit} action="#" className={` ${sendStatus ? 'add-review__form' : 'add-review__form-disabled'}`}>
      <div className="rating">
        <div className="rating__stars">
          {STARS.map((item) => (
            <React.Fragment key={item.id}>
              <input onClick={() => {hanldeMouseClick(item.id);}} key={item.id} className="rating__input" id={`star-${item.id}`} type="radio" name="rating" value={item.id} disabled={!sendStatus}/>
              <label className="rating__label" htmlFor={`star-${item.id}`}>Rating {item.id}</label>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea onChange={handleCommentAdd} value={commentData} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" disabled={!sendStatus}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={isDisabled || !sendStatus}>Post</button>
        </div>
      </div>
    </form>
  );

}

export default AddReviewForm;
