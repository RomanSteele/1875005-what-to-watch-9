import { Film } from '../../types/film';
import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

type PlayerScreenProps = {
  films: Film[],
}

function PlayerScreen({ films }: PlayerScreenProps): JSX.Element {

  const [active, setActive] = useState(true);
  const [videoTimestamp, setVideoTimestamp] = useState<number>(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const { id } = useParams() as {
    id: string;
  };

  useEffect(() => {
    if (active) {
      if (videoRef.current) {
        videoRef.current.play();
      }
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [active]);

  const handlePlayFilm = () => {
    setActive(!active);
  };

  const handleFullScreen = () => {
    videoRef.current?.requestFullscreen();
  };

  const film = films[parseInt(id, 10)];

  const getPercent = (runTime: number, currentTime: number) => ((currentTime * 100) / (runTime * 60)).toFixed(3);
  const getLeftTime = (runTime: number, currentTime: number) => new Date(((runTime * 60) - currentTime) * 1000).toUTCString().split(/ /)[4];

  const { videoLink, posterImage } = film;

  return (
    <div className="player">
      <video ref={videoRef} src={videoLink} className="player__video" poster={posterImage}  onTimeUpdate={(evt) => setVideoTimestamp(Math.round(evt.currentTarget.currentTime))}></video>

      <button onClick={() => {
        videoRef.current?.pause();
        window.history.back();
      }}
      type="button" className="player__exit"
      >Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{ left: `${getPercent(film.runTime, videoTimestamp)}%` }}>Toggler</div>
          </div>
          <div className="player__time-value">{getLeftTime(film.runTime, videoTimestamp)}</div>
        </div>

        <div className="player__controls-row">
          <button onClick={() => {handlePlayFilm();}} type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={active?'#pause':'#play-s'}></use>
            </svg>
            <span>{active?'Play':'Pause'}</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button onClick={() => {handleFullScreen();}}type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>);
}

export default PlayerScreen;

