import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Film } from '../../types/film';
import { AppRoute, VIDEO_PREVIEW_DELAY } from '../../const';

type VideoPlayerProps = {
    autoPlay: boolean,
    film: Film,
}

function VideoPlayer({ autoPlay, film }: VideoPlayerProps): JSX.Element {

  const { id, name, previewVideoLink, previewImage } = film;

  const [isLoading, setIsLoading] = useState(true);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const navigate = useNavigate();

  const handleOnMouseEnter = () => {
    setTimer(setTimeout(() => {
      if (!isLoading) {
        videoRef.current && videoRef.current.play();
      }
    }, VIDEO_PREVIEW_DELAY));
  };

  const handleOnMouseLeave = () => {
    if (timer) {
      clearTimeout(timer);
      setTimer(null);
      videoRef.current && videoRef.current.load();

    }
  };


  return (
    <article onClick={() => {navigate(`${AppRoute.FilmPage}/${id}`);}} className="small-film-card catalog__films-card" onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
      <div className="small-film-card__image">
        <video muted ref={videoRef} src={previewVideoLink} poster={previewImage} width="100%" height="100%" autoPlay={autoPlay} onLoadedData={() => {setIsLoading(false);}}></video>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.FilmPage}/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default VideoPlayer;
