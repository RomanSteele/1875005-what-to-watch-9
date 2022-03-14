import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Film } from '../../types/film';
import { Review } from '../../types/reviews';
import MovieTabDetails from '../tabs/movie-page-details-tab';
import MoviePageReviewsTabProps from '../tabs/movie-page-reviews-tab';
import MovieTab from '../tabs/movie-page-tab';

type TabsProps = {
  film: Film,
  reviews: Review[],
}

type FilmTab = {
  id: number,
  title: string
}

function Tabs({ film, reviews }: TabsProps): JSX.Element {
  const FilmButtonTabs: FilmTab[] = [
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

  const [isActive, setIsActive] = useState<number>(1);
  const handleActiveTab = (id: number) => {
    setIsActive(id);
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">

          {FilmButtonTabs.map((item)=>(
            <li key={item.id} className={`film-nav__item ${item.id === isActive ? 'film-nav__item--active' : ''}`} onClick={() => {handleActiveTab(item.id);}}>
              <Link  className="film-nav__link" to={''}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {isActive === 1 && <MovieTab film={film}/>}
      {isActive === 2 && <MovieTabDetails film={film} />}
      {isActive === 3 && <MoviePageReviewsTabProps reviews={reviews}/>}
    </div>
  );
}

export default Tabs;
