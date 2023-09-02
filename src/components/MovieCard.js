import React from 'react'
import { CDN_IMAGE_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='p-2'>
        <img src={CDN_IMAGE_URL+posterPath} alt="" className='w-48'/>
    </div>
  )
}

export default MovieCard