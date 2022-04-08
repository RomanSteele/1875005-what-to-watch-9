import { Link, useParams } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Film } from '../../types/film';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import AddReviewForm from '../../components/add-review-form/add-review-form';


type AddReviewScreenProps = {
  films: Film[];
};

function ReviewScreen({ films }: AddReviewScreenProps): JSX.Element {

  const { id } = useParams() as {
    id: string;
  };
  const numericId = parseInt(id, 10);

  const  film = films.find((item) => item.id === numericId);

  const { name, previewImage } = film as {
  name: Film['name'],
  previewImage: Film['previewImage']
};

  return (
    <section className="film-card film-card--full" >
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={previewImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.FilmPage}/${id}`} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.FilmPage}/${id}/${AppRoute.Review}`} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>
          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={previewImage} alt={name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm key={id}/>
      </div>

    </section>);
}

export default ReviewScreen;
