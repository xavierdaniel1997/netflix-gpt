import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainerWithVideo = () => {

    const movie = useSelector(store => store.movie.nowPlayingMovies)

    if(!movie) return;

    const mainMovie = movie[0]
    const {original_title, overview, id} = mainMovie;
  return (
    <div className=''>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainerWithVideo