import {useDispatch} from "react-redux";
import {API_OPTIONS} from "../utils/constants";
import {addTopRatingMovies} from "../redux/movieSlice";
import {useEffect} from "react";

const useTopRatingMovies = () => {
  const dispatch = useDispatch();

  const getTopRatingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatingMovies(json.results));
  };

  useEffect(() => {
    getTopRatingMovies();
  }, []);
};
export default useTopRatingMovies;
