import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { addMyListFilm } from '../../store/api-actions';
import { Film } from '../../types/film';


type AddToMyListButtonProps = {
  filmId: number,
}

function AddToMyListButton({ filmId }: AddToMyListButtonProps): JSX.Element {
  const myListFilms = useAppSelector(({ ACTION }) => ACTION);
  const authorizationStatus = useAppSelector(({ USER }) => USER);
  const [filmStatus, setFilmStatus] = useState(0);

  const addToMyList = (id: number, status: number) => {
    store.dispatch(addMyListFilm({ id, status }));
  };

  useEffect(() => {
    if (!myListFilms) {
      return;
    }
    if (myListFilms.myListFilms.find((item: Film) => item.id === filmId)) {
      setFilmStatus(1);
    } else {
      setFilmStatus(0);
    }
  }, [filmId, myListFilms]);

  return (
    <button onClick={() => {addToMyList(filmId, 1 - filmStatus);}} className="btn btn--list film-card__button" type="button">
      <svg viewBox="0 0 19 20" width="19" height="20">
        {authorizationStatus.authorizationStatus === 'AUTH' && filmStatus ? <use xlinkHref="#in-list"></use> : <use xlinkHref="#add"></use>}
      </svg>
      <span>My list</span>
    </button>
  );
}


export default AddToMyListButton;
