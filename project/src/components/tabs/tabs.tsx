import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Film } from '../../types/film';
import { Review } from '../../types/reviews';
import MoviePageTab from '../tabs/movie-page-tab';
import MoviePageDetailsTab from '../tabs/movie-page-details-tab';
import MoviePageReviewsTab from '../tabs/movie-page-reviews-tab';


type TabsProps = {
  film: Film,
  reviews: Review[],
}

type FilmTab = {
  id: number,
  title: string
}

const FILM_TABS: FilmTab[] = [
  {
    id: 1,
    title: 'Overview',
  },
  {
    id: 2,
    title: 'Details',
  },
  {
    id: 3,
    title: 'Reviews',
  },
];

function Tabs({ film, reviews }: TabsProps): JSX.Element {

  const [isActive, setIsActive] = useState<number>(1);
  const handleActiveTabClick = (id: number) => {
    setIsActive(id);
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">

          {FILM_TABS.map((item)=>(
            <li key={item.title} className={`film-nav__item ${item.id === isActive ? 'film-nav__item--active' : ''}`} onClick={() => {handleActiveTabClick(item.id);}}>
              <Link  className="film-nav__link" to={''}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {isActive === FILM_TABS[0].id && <MoviePageTab film={film}/>}
      {isActive === FILM_TABS[1].id && <MoviePageDetailsTab film={film} />}
      {isActive === FILM_TABS[2].id && <MoviePageReviewsTab reviews={reviews}/>}
    </div>
  );
}

export default Tabs;
