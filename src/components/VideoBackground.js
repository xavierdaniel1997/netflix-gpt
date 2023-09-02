import {useSelector} from "react-redux";

import useNowPlayingTrailer from "../Hooks/useNowPlayingTrailer";

const VideoBackground = ({movieId}) => {
  useNowPlayingTrailer(movieId);

  const trailerKey = useSelector((store) => store.movie.nowPlayingTrailer);

  return (
    <div className="">
      <iframe
        className="w-full aspect-video"
        src={"https://www.youtube.com/embed/" + trailerKey?.key +"?&autoplay=1&mute=1"}
        
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
