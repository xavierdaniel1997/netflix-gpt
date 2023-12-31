import { useEffect } from "react";
import { addNowPlayingTrailer } from "../redux/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";


const useNowPlayingTrailer = (movieId) => {
    const dispatch = useDispatch()
    const playingTrailer = useSelector((store) => store.movie.nowPlayingTrailer)
    const getMovieTrailerVideos = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
  
  
      const filterTrailerData = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterTrailerData.length
        ? filterTrailerData[0]
        : json.results[0];
 
      dispatch(addNowPlayingTrailer(trailer))
  
    };
  
    useEffect(() => {
      !playingTrailer && getMovieTrailerVideos();
    }, []);
  
}

export default useNowPlayingTrailer;