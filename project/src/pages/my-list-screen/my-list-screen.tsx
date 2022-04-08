import { useAppSelector } from '../../hooks/index';
import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import UserBlock from '../../components/user-block/user-block';
import FilmsList from '../../components/films-list/films-list';


function MyListScreen(): JSX.Element {
  const films = useAppSelector(({ ACTION })=>ACTION);
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <FilmsList films={films.myListFilms} />
        </div>
      </section>
      <Footer />
    </div>);
}

export default MyListScreen;
