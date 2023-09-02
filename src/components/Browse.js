import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainerWithVideo from "./MainContainerWithVideo";
import SecondaryContainerWithCards from "./SecondaryContainerWithCards";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
     
      <MainContainerWithVideo />

      <SecondaryContainerWithCards/>
    </div>
  );
};

export default Browse;
