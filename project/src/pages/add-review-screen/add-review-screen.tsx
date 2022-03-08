
import { Film } from '../../types/film';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';


type AddReviewScreenProps = {
  film: Film;
};

function ReviewScreen({ film }: AddReviewScreenProps): JSX.Element {
  const { name, previewImage } = film;
  return (
    <section className="film-card film-card--full">
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
                <a href="film-page.html" className="breadcrumbs__link">{name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
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
        <AddReviewForm />
      </div>

    </section>);
}

export default ReviewScreen;
