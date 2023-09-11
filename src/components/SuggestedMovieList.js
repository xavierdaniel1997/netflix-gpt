import React from "react";
import SuggestedMovieCard from "./SuggestedMovieCard";

const SuggestedMovieList = ({movies}) => {
  return (
    <div className="pt-5 flex">
      {movies.map((movie) => (
        <div key={movie.id} className="flex">
          <SuggestedMovieCard posterPath={movie?.poster_path} />
        </div>
      ))}
    </div>
  );
};

export default SuggestedMovieList;
