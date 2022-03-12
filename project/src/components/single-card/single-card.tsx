import { Film } from '../../types/film';
import VideoPlayer from '../video-player/video-player';


type SingleCardScreenProps = {
  film: Film;
}


function SingleCard({ film }: SingleCardScreenProps): JSX.Element {


  return (
    <VideoPlayer autoPlay={false} film={film}/>
  );
}

export default SingleCard;

