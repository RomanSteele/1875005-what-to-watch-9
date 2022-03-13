import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Film } from '../../types/film';

type VideoPlayerProps = {
    autoPlay: boolean,
    film: Film,
}

function VideoPlayer({ autoPlay, film }: VideoPlayerProps): JSX.Element {
  const { id, name, previewVideoLink, posterImage } = film;

  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const videoRef = useRef<HTMLVideoElement | null>(null);


  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.volume = 0;
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    videoRef.current.load();
  }, [isPlaying, posterImage]);

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={() => setIsPlaying(!isPlaying)} onMouseLeave={() => setIsPlaying(!isPlaying)}>
      <div className="small-film-card__image">
        <video ref={videoRef} src={previewVideoLink} poster={posterImage} width="100%" height="100%"></video>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default VideoPlayer;
