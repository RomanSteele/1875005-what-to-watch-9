import React, { FormEvent, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { STARS, AppRoute } from '../../const';
import { store } from '../../store';
import { postComment } from '../../store/api-actions';
import { CommentPost } from '../../types/comment-post';
import { commentSendStatus } from '../../store/slices/action-data/action-data';
import {  useAppDispatch, useAppSelector } from '../../hooks';

const enum CommentLength {
  Min = 50,
  Max = 400,
}

function AddReviewForm(): JSX.Element {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [commentData, setCommentData] = useState<string>('');
  const [ratingData, setRatingData] = useState<number>(0);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const sendStatus = useAppSelector(({ ACTION }) => ACTION.commentSendStatusItem);

  const handleCommentAdd = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const enteredComment = event.target.value;
    setCommentData(enteredComment);
  };

  const hanldeMouseClick = (id: number) => {
    setRatingData(id);
  };

  const sendOnSubmit = ({ id, comment, rating }: CommentPost) => {
    store.dispatch(postComment({ id, comment, rating }));
    navigate(`${AppRoute.FilmPage}/${id}`);
  };

  const id = Number(params.id);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if ( commentData !== '' || commentData.length > CommentLength.Min || commentData.length < CommentLength.Max) {
      sendOnSubmit(
        {
          id: id,
          rating: ratingData,
          comment: commentData,
        });
    }
  };

  useEffect (() => () => {
    dispatch(commentSendStatus(true));
  }, [ dispatch ]);

  useEffect (() => {
    if (isSending && sendStatus === true) {
      navigate(`${AppRoute.FilmPage}/${id}`);
    }
    setIsSending(sendStatus === false);
  }, [id, isSending, navigate, sendStatus]);


  useEffect (() => {
    setIsDisabled(
      commentData.length < CommentLength.Min ||
      commentData.length > CommentLength.Max,
    );
  }, [ commentData ]);

  return (
    <form onSubmit={handleSubmit} action="#" className={`add-review__form ${isSending ? ' add-review__form-disabled' : ''}`}>
      <div className="rating">
        <div className="rating__stars">
          {STARS.map((item) => (
            <React.Fragment key={item.id}>
              <input onClick={() => {hanldeMouseClick(item.id);}} key={item.id} className="rating__input" id={`star-${item.id}`} type="radio" name="rating" value={item.id} disabled={isSending}/>
              <label className="rating__label" htmlFor={`star-${item.id}`}>Rating {item.id}</label>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea onChange={handleCommentAdd} value={commentData} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" disabled={isSending}></textarea>
        <div className="add-review__submit">
          {(ratingData === null || commentData === '') ?
            <button className="add-review__btn" type="submit" disabled={isDisabled || isSending}>Post</button> :
            <button className="add-review__btn" type="submit" disabled={isDisabled || isSending}>Post</button>}
        </div>
      </div>
    </form>
  );

}

export default AddReviewForm;
