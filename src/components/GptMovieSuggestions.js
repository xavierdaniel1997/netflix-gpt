import React from "react";
import {useSelector} from "react-redux";
import MovieList from "./MovieList";


const GptMovieSuggestions = () => {
  const {movieNames, movieSuggetionResults} = useSelector(
    (store) => store.gptSearch
  );
  if (!movieNames) return null;
  return (
    <div className="pt-5">
      <div className="flex justify-center items-center py-2">
        <h1 className="font-semibold text-3xl">{movieNames.join(",")}</h1>
      </div>
      {movieNames.map((movie, index) => (
        <MovieList key={index} movies={movieSuggetionResults[index]} />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
