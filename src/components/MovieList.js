import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {
    
    if(!movies) return
    const visibleMovies = movies.slice(0, 8); 
  return (
    <div className="bg-black py-2">
      <div className="flex flex-col gap-3 px-10">
        <h1 className="font-bold text-2xl text-white">{title}</h1>
        <div className="flex">  
          {visibleMovies.map((movie) => (
            <div key={movie.id} className="flex">
                <MovieCard  posterPath={movie?.poster_path}/>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
