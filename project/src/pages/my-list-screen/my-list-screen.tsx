import Footer from '../../components/footer/footer';
import { Film } from '../../types/film';
import MyFilmsList from '../../components/my-films-list/my-films-list';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';

type MyListScreenProps = {
  films: Film[];
};

function MyListScreen({ films }: MyListScreenProps): JSX.Element {
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
          <MyFilmsList films={films} />
        </div>
      </section>
      <Footer />
    </div>);
}

export default MyListScreen;
