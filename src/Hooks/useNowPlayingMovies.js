import {useDispatch, useSelector} from "react-redux";
import {API_OPTIONS} from "../utils/constants";
import {addNowPlayingMovies} from "../redux/movieSlice";
import {useEffect} from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const playingMovies = useSelector((store) => store.movie.nowPlayingMovies);

  const getNewMovieDatas = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !playingMovies && getNewMovieDatas();
  }, []);
};

export default useNowPlayingMovies;
