import { Film } from '../../types/film';
import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { PlayerActiveStatus, TimeConvertion } from '../../const';
type PlayerScreenProps = {
  films: Film[],
}

function PlayerScreen({ films }: PlayerScreenProps): JSX.Element {

  const [active, setActive] = useState(true);
  const [videoTimestamp, setVideoTimestamp] = useState<number>(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const params = useParams();
  const id = Number(params.id);
  const film = films[id-1];

  useEffect(() => {
    if (videoRef.current){
      if (active) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [active]);

  const handlePlayButtonClick = () => {
    setActive(!active);
  };

  const handleFullScreenButtonClick = () => {
    videoRef.current?.requestFullscreen();
  };


  const getPercent = (runTime: number, currentTime: number) => ((currentTime * TimeConvertion.SetPercent) / (runTime * TimeConvertion.SecondsInMinute)).toFixed(TimeConvertion.NumberAfterParse);
  const getLeftTime = (runTime: number, currentTime: number) => new Date(((runTime * TimeConvertion.SecondsInMinute) - currentTime) * TimeConvertion.MilisecondsInSecond).toUTCString().split(/ /)[TimeConvertion.Limit];

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
          <button onClick={handlePlayButtonClick} type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={active ? PlayerActiveStatus.RefPause : PlayerActiveStatus.RefPlay}></use>
            </svg>
            <span>{active ? PlayerActiveStatus.Play : PlayerActiveStatus.Pause}</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button onClick={handleFullScreenButtonClick}type="button" className="player__full-screen">
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

