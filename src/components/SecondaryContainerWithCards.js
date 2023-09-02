import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainerWithCards = () => {
  const movies = useSelector(store => store.movie)
 
  return (
    <div className='-mt-72'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Thriller"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Adventure"} movies={movies.nowPlayingMovies}/>
    </div>
  )
}

export default SecondaryContainerWithCards