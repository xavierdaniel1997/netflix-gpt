import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainerWithCards = () => {
  const movies = useSelector(store => store.movie)
 
  return (
    <div className='-mt-72'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Top Rating"} movies={movies.topRatingMovies}/>
      <MovieList title={"Up Comming"} movies={movies.upCommingMovies}/>
    </div>
  )
}

export default SecondaryContainerWithCards