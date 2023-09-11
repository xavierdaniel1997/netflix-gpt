import {useDispatch} from "react-redux";
import {API_OPTIONS} from "../utils/constants";
import {addUpCommingMovies} from "../redux/movieSlice";
import {useEffect} from "react";

const useUpCommingMovies = () => {
  const dispatch = useDispatch();

  const getUpCommingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpCommingMovies(json.results));
  };

  useEffect(() => {
    getUpCommingMovies();
  }, []);
};
export default useUpCommingMovies;
