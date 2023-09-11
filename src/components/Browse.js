import {useSelector} from "react-redux";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatingMovies from "../Hooks/useTopRatingMovies";
import useUpCommingMovies from "../Hooks/useUpCommingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainerWithVideo from "./MainContainerWithVideo";
import SecondaryContainerWithCards from "./SecondaryContainerWithCards";

const Browse = () => {
  const gptSearchShow = useSelector((store) => store.gptSearch.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatingMovies();
  useUpCommingMovies();
  return (
    <div>
      <Header />
      {gptSearchShow ? (
        <GptSearch />
      ) : (
        <>
          <MainContainerWithVideo />
          <SecondaryContainerWithCards />
        </>
      )}
    </div>
  );
};

export default Browse;
